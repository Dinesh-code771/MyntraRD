import React, { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import {
  addToWishList,
  resetWishList,
  setRefetch,
} from "../Redux/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
import { insetPerticularColumn } from "../apis/insertPerticularColumn";
import { useParams, useNavigate } from "react-router-dom";
import { databases } from "../apis/appWrite.js";
import { Query } from "appwrite";
import fetchDataFromCollection from "../apis/fetchDataFromCollection";
import updateDocument from "../apis/updateDocument";
// import { Databases } from "appwrite";
export default function ProductCard({
  title,
  decription,
  price,
  images,
  size,
  rating,
  likes,
  id,
  isWishListItem = false,
  product,
}: {
  title: string;
  decription: string;
  price: number;
  images: string[];
  size?: string;
  rating: number;
  likes?: string;
  id: Number;
  product: any;
  isWishListItem?: boolean;
}) {
  const [current, setCurrent] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const dispatch = useDispatch();
  const { name } = useParams<{ name: string }>();
  // const wishList = useSelector((state: any) => state.wishListSlice.wishList);
  const [wishListItems, setWishListItems] = React.useState<any[]>([]);
  const navigate = useNavigate();
  const refetch = useSelector((state: any) => state.wishListSlice.refetch);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  async function fetchAndUpdateData(product: any, isRemove = false) {
    //fetch data from server
    let items = await fetchDataFromCollection(
      //[{}]
      "676a1ec4001bf5b712d9",
      "67a9650e00254ea62e60",
      "67a966630010d16c0e61",
      "$id",
      "wishtListProducts"
    );

    if (isRemove) {
      items = items.filter((item: any) => item.id !== product.id); //9
    }
    // update data in server
    const res = await updateDocument(
      "676a1ec4001bf5b712d9",
      "67a9650e00254ea62e60",
      "67a966630010d16c0e61",
      "wishtListProducts",
      isRemove ? [...items] : [...items, product]
    );

    //update state
    isRemove ? setWishListItems(items) : setWishListItems([...items, product]);
    if (isRemove) {
      dispatch(setRefetch(!refetch));
    }
    return res;
  }

  function handleWishList(product: any) {
    if (wishListItems.includes(id)) {
      return;
    }
    console.log("clicked");
    // dispatch(addToWishList(id));
    fetchAndUpdateData(product);
  }

  function handleRemove(product: any) {
    fetchAndUpdateData(product, true);
  }

  useEffect(() => {
    async function fetchItems() {
      const data = await fetchDataFromCollection(
        "676a1ec4001bf5b712d9",
        "67a9650e00254ea62e60",
        "67a966630010d16c0e61",
        "$id",
        "wishtListProducts"
      );
      setWishListItems(data);
    }
    fetchItems();
  }, []);
  //fetch
  return (
    <div
      onClick={() => {
        navigate(`/category/${name}/${id}`);
      }}
      onMouseEnter={() => {
        if (isWishListItem) return;
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log("sds");
        setIsHovered(false);
        setCurrent(0);
      }}
      className={`${!isWishListItem ? "hover:shadow-lg" : "border relative"}`}
    >
      <div
        className={`w-full relative  cursor-pointer ${
          isHovered ? "h-auto" : ""
        }  transition ease-in-out`}
      >
        <img
          src={images[current]}
          alt=""
          className="w-full  h-full object-cover"
        />
        {!isWishListItem && !isHovered && (
          <div className="rating absolute bottom-1 items-center flex gap-3 left-1 bg-[#D4D4D4] text-black px-2 py-2 rounded-sm">
            <p className="text-[0.6rem] font-bold ">{rating}</p>
            <p className="text-[0.6rem] font-bold ">{likes}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 p-3">
        <div className="dotsWrapper flex justify-center gap-3">
          {isHovered &&
            images.length > 1 &&
            images.map((image, index) => {
              return (
                <div
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(index);
                  }}
                  className={`w-[6px] h-[6px] rounded-full ${
                    current === index ? "bg-pink-400" : "bg-slate-300"
                  } `}
                ></div>
              );
            })}
        </div>
        <div className="flex gap-2 flex-col">
          {isHovered ? (
            <>
              <div
                className={`wishList cursor-pointer mt-2 ${
                  wishListItems.map((item) => item.id).includes(id)
                    ? "bg-[lightGrey]"
                    : "bg-white"
                } flex justify-center gap-2 items-center border py-2  rounded-md`}
              >
                <CiHeart
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWishList(product);
                  }}
                  color={wishListItems.includes(title) ? "red" : ""}
                />
                <p className="uppercase font-bold text-xs">
                  {wishListItems.map((item) => item.id).includes(id)
                    ? "Wishlisted"
                    : " Wishlist"}
                </p>
              </div>
              <div className="size">
                <span>
                  <p className="text-xs ">Size: 40</p>
                </span>
              </div>
            </>
          ) : (
            <>
              <h4 className="text-sm font-bold">{title}</h4>
              <p className="text-xs">{decription}</p>
            </>
          )}
          <p className="text-xs font-bold">{`Rs. ${price}`}</p>
          {isWishListItem ? (
            <div className="w-full flex justify-center items-center border-t ">
              <button className="p-2 font-semibold text-[#ff3e6c] text-sm">
                Move To Bag
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="cross cursor-pointer absolute top-2 right-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRemove(product);
          }}
          className="text-xs bg-[lightgrey] py-2 px-3 rounded-full"
        >
          X
        </button>
      </div>
    </div>
  );
}
