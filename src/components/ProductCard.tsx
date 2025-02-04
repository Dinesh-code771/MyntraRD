import React, { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { addToWishList } from "../Redux/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
import { insetPerticularColumn } from "../apis/insertPerticularColumn";
import { useParams } from "react-router-dom";
export default function ProductCard({
  title,
  decription,
  price,
  images,
  size,
  rating,
  likes,
  isWishListItem = false,
}: {
  title: string;
  decription: string;
  price: number;
  images: string[];
  size?: string;
  rating: number;
  likes?: string;
  isWishListItem?: boolean;
}) {
  const [current, setCurrent] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const dispatch = useDispatch();
  const { name } = useParams<{ name: string }>();
  const wishList = useSelector((state: any) => state.wishListSlice.wishList);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {}, [current]);

  function handleWishList(title: string) {
    if (wishList.includes(title)) {
      return;
    }
    console.log("clicked");
    dispatch(addToWishList(title));
    console.log(wishList, "wishList");
  }
  //fetch
  useEffect(() => {
    async function updateDataInServerForTopFilter(data: any) {
      const res = await insetPerticularColumn(
        data,
        "676a1ec4001bf5b712d9",
        "676a1ee4001ae452e2df",
        "CategoryType",
        name,
        "wishListItems",
        false
      );
      return res;
    }
    const res = updateDataInServerForTopFilter(wishList);
    console.log(res, "res");
  }, [wishList]);
  return (
    <div
      onClick={() => {
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
                  wishList.includes(title) ? "bg-[lightGrey]" : "bg-white"
                } flex justify-center gap-2 items-center border py-2  rounded-md`}
              >
                <CiHeart
                  onClick={() => handleWishList(title)}
                  color={wishList.includes(title) ? "red" : ""}
                />
                <p className="uppercase font-bold text-xs">
                  {wishList.includes(title) ? "Wishlisted" : " Wishlist"}
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
        <button className="text-xs bg-[lightgrey] py-2 px-3 rounded-full">
          X
        </button>
      </div>
    </div>
  );
}
