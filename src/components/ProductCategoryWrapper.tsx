import React from "react";
import ProductCategory from "./ProductCategory";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { listDocuments } from "../apis/listDocuments";
import { useSelector } from "react-redux";

export default function ProductCategoryWrapper() {
  //useEffect to scroll to top
  const { name } = useParams<{ name: string }>();
  const globalSearchValue = useSelector(
    (state: any) => state.navBarSlice.globalSearchValue
  );
  const selectedCategory = useSelector(
    (state: any) => state.filterSlice.Categorie
  );
  const prices = useSelector((state: any) => state.filterSlice.prices);
  const selectedBrand = useSelector((state: any) => state.filterSlice.Brand);
  const selectedColor = useSelector((state: any) => state.filterSlice.Colors);
  const [productDetails, setProductDetails] = React.useState<any[]>([]);
  const [searchedProductDetails, setSearchedProductDetails] = React.useState<
    any[]
  >([]);

  //fetch products from database
  useEffect(() => {
    const categoryNameValue = name;
    async function fetchDetails() {
      const details: any = await listDocuments(
        "676a1ec4001bf5b712d9",
        "676a1ee4001ae452e2df",
        "CategoryType",
        name,
        ["productDetails"]
      );
      setProductDetails(details?.productDetails);
    }
    fetchDetails();
    // databases
    //   .listDocuments("676a1ec4001bf5b712d9", "676a1ee4001ae452e2df", [
    //     Query.equal("CategoryType", categoryNameValue as any),
    //   ])
    //   .then((response: any) => {
    //     console.log("API Response:", response); // Log entire response
    //     if (response?.documents?.length) {
    //       const { documents }: { documents: any } = response;
    //       console.log(documents, "documents fetched");
    //       const productDetails = JSON.parse(
    //         documents[0]?.productDetails || "{}"
    //       );
    //       setProductDetails(productDetails);
    //     } else {
    //       console.warn("No documents found for this category.");
    //     }
    //   })
    //   .catch((error: any) => {
    //     console.error("API Error:", error);
    //   });
  }, []);

  //search functionality
  useEffect(() => {
    let categoryName = selectedCategory?.map((category: any) =>
      category.filterName?.toLowerCase()
    );
    let selectedColorNames = selectedColor?.map((color: any) =>
      color.filterName?.toLowerCase()
    );
    let pricesString = prices.filterName;
    let [min, max] = ["0", "0"];
    if (pricesString?.length > 0) {
      [min, max] = [pricesString.split(" ")[1], pricesString.split(" ")[4]];
    }
    let brandsName = selectedBrand?.map((brand: any) =>
      brand.filterName.toLowerCase()
    );
    let filteredProducts = productDetails //filter by category
      .filter((product: any) => {
        if (categoryName?.includes(product.catergoryType?.toLowerCase())) {
          return product;
        } else if (categoryName.length === 0) {
          return product;
        }
      }) //filter by brand
      .filter((product: any) => {
        if (brandsName?.includes(product.brand?.toLowerCase())) {
          return product;
        } else if (brandsName.length === 0) {
          return product;
        }
      }) //filter by price
      .filter((product: any) => {
        if (parseInt(min) && parseInt(max)) {
          return (
            product.price >= parseInt(min) && product.price <= parseInt(max)
          );
        } else {
          return product;
        }
      }) //color filter
      .filter((product: any) => {
        console.log(product.colors, selectedColorNames, "colors");
        if (
          product?.colors?.some((item: any) => {
            return selectedColorNames.join("").includes(item.toLowerCase());
          })
        ) {
          return product;
        } else if (selectedColorNames.length === 0) {
          return product;
        }
      }) //search by title
      .filter((product: any) => {
        return product.title
          .toLowerCase()
          .includes(globalSearchValue.toLowerCase());
      });

    setSearchedProductDetails(filteredProducts);
  }, [
    globalSearchValue,
    productDetails,
    prices,
    selectedBrand,
    selectedCategory,
    selectedColor,
  ]);

  return (
    <>
      <ProductCategory productDetails={searchedProductDetails} />
    </>
  );
}
