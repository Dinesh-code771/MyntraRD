import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function WishList() {
  const wishListItems = useSelector(
    (state: any) => state.wishListSlice.wishList
  );
  const productDetails = useSelector(
    (state: any) => state.navBarSlice.productsDetails
  );
  const productWishListItems = productDetails.filter((product: any) =>
    wishListItems.includes(product.title)
  );
  console.log(
    productWishListItems,
    "productWishListItems",
    productDetails,
    "productDetails",
    wishListItems,
    "wishListItems"
  );
  return (
    <div className="wrapper  w-[80%] mx-auto flex flex-col gap-2 py-10">
      <h3>{`My wishList  ${productWishListItems.length} Items`}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
        {productWishListItems.map((product: any) => (
          <ProductCard
            key={product.title}
            title={product.title}
            decription={product.description}
            price={product.price}
            images={product.images}
            rating={product.rating}
            isWishListItem={true}
          />
        ))}
      </div>
    </div>
  );
}
