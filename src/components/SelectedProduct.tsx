import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../apis/appWrite";
import { listDocuments } from "../apis/listDocuments";
import ReviewComponent from "./ReviewComponent";
import { TbCardsFilled } from "react-icons/tb";
import HeaderRouter from "./HeaderRouter";
import updateDocument from "../apis/updateDocument";
import { useDispatch, useSelector } from "react-redux";
import { setRefetch } from "../Redux/wishListSlice";
import fetchDataFromCollection from "../apis/fetchDataFromCollection";

export default function SelectedProduct() {
  const { id, name } = useParams<{ id: string; name: string }>();
  const [product, setProduct] = useState<any>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [wishListItems, setWishListItems] = useState<any>([]);
  const dispatch = useDispatch();
  const refetch = useSelector((state: any) => state.wishListSlice.refetch);
  // const wishListItems = useSelector((state: any) => state.wishList.wishListItems);
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
    console.log(items, "items");
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
  useEffect(() => {
    const fetchProduct = async () => {
      const product: any = await listDocuments(
        "676a1ec4001bf5b712d9",
        "676a1ee4001ae452e2df",
        "CategoryType",
        name,
        ["productDetails"]
      );
      let selectedProduct = product?.productDetails.find(
        (product: any) => product.id === parseInt(id as any)
      );
      console.log(selectedProduct, "selectedProduct");
      setProduct(selectedProduct);
    };
    fetchProduct();
  }, [id, name]);
  return (
    <div className="container flex flex-col gap-4 w-[70%] mx-auto h-[80%]">
      <div className="header my-5">
        <HeaderRouter
          titles={[
            { title: "Home", link: "" },
            { title: name as string, link: `category/${name}` },
            { title: product?.brand, link: "" },
          ]}
        />
      </div>
      <div className="body flex gap-5 h-full">
        <div className="left flex-1 grid grid-cols-2 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="w-full h-[400px] bg-gray-200 relative">
              <img
                src={product?.images[index]}
                alt={product?.title}
                className="w-full h-full object-containe cursor-zoom-in hover:scale-105 transition-all duration-300"
              />
              {index === 1 && (
                <div
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className={
                    "absolute bottom-5 cursor-pointer border-2 border-gray-100 shadow-lg right-5 w-10 hover:w-40 transition-all duration-300 h-10 bg-white rounded-full flex items-center justify-between px-2"
                  }
                >
                  {isHovering && (
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                      View Product
                    </p>
                  )}
                  <TbCardsFilled size={20} color="#ff3e6c" className="" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="right flex-1 flex flex-col gap-4">
          <div className="title_and_description_container">
            <h1 className="text-2xl font-bold">{product?.title}</h1>
            <p className="text-gray-500">
              {`${product?.price} lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.`}
            </p>
          </div>

          <div className="price_and_discount_container flex gap-2 items-center">
            <p className="text-gray-500 text-xl font-bold">{`₹${product?.price}`}</p>
            <p className="text-gray-500 font-bold">{`${product?.discount}% off`}</p>
            <p className="text-gray-500 font-bold">{`₹${
              product?.price - product?.discount
            }`}</p>
          </div>

          <div className="moreColors_container flex flex-col gap-2">
            <h1 className="text-l font-semibold uppercase">More Colors</h1>
            <div className="colors_container flex gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div className=" h-[80px] w-[80px] bg-gray-200">
                  <img
                    src={product?.images[index]}
                    alt={product?.title}
                    className="w-full h-full object-containe"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="selectSize flex flex-col gap-2">
            <h1 className="text-l font-semibold uppercase">Select Size</h1>
            <div className="size_container flex gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div className="size_box bg-gray-200 w-[40px] h-[40px] rounded-full flex items-center justify-center">
                  {index + 40}
                </div>
              ))}
            </div>
          </div>

          <div className="addtoBag_and_wishlist_container flex gap-2">
            <button className="bg-gray-200 flex-1 py-4 px-2 rounded-md flex items-center justify-center">
              <p>Add to Bag</p>
            </button>
            <button
              onClick={() => handleWishList(product)}
              className="bg-gray-200 flex-1   py-4 px-2 rounded-md flex items-center justify-center"
            >
              <p>{!wishListItems.find((item: any) => item.id === product.id) ? "Wishlist" : " Wishlisted"}</p>
            </button>
          </div>
          <div className="review_container">
            <ReviewComponent
              review={product?.review}
              rating={product?.rating}
              images={product?.images}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
