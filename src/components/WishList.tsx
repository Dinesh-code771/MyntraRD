import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { listDocuments } from "../apis/listDocuments";
import { setWishList } from "../Redux/wishListSlice";
import { useParams } from "react-router-dom";
import { setProductsDetails } from "../Redux/navBarSlice";
import { store } from "../Redux/store";
import { databases } from "../apis/appWrite";
import { Query } from "appwrite";
import fetchDataFromCollection from "../apis/fetchDataFromCollection";
import Pagination from "./Pagination";
export default function WishList() {
  const [wishListItems, setWishListItems] = React.useState<any[]>([]);
  const refetch = useSelector((state: any) => state.wishListSlice.refetch);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    //fetch wishList items from database
    async function fetchWishListItems() {
      const data = await fetchDataFromCollection(
        "676a1ec4001bf5b712d9",
        "67a9650e00254ea62e60",
        "67a966630010d16c0e61",
        "$id",
        "wishtListProducts"
      );
      setWishListItems(data);
    }
    fetchWishListItems();
  }, [refetch]);

  return (
    <div className="wrapper  w-[80%] mx-auto flex flex-col gap-2 py-10">
      <h3>{`My wishList  ${wishListItems?.length} Items`}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
        {wishListItems
          .slice((currentPage - 1) * 5, currentPage * 5)
          .map((product: any, index: number) => (
            <ProductCard
              id={product.id}
              key={product.title}
              title={product.title}
              decription={product.description}
              price={product.price}
            images={product.images}
            rating={product.rating}
            isWishListItem={true}
            product={product}
          />
        ))}
      </div>
      <Pagination
        totalData={wishListItems.length}
        dataPerPage={5}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
