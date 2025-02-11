import React from "react";
import ProductCategory from "./ProductCategory";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { listDocuments } from "../apis/listDocuments";
import { useDispatch, useSelector } from "react-redux";
import { setProductsDetails } from "../Redux/navBarSlice";
import { resetWishList } from "../Redux/wishListSlice";

export default function ProductCategoryWrapper() {
  //useEffect to scroll to top
  const { name } = useParams<{ name: string }>();
  const globalSearchValue = useSelector(
    (state: any) => state.navBarSlice.globalSearchValue
  );
  const selectedCategory = useSelector(
    (state: any) => state.filterSlice.Categorie
  );
  const currentSelectedFilter = useSelector(
    (state: any) => state.navBarSlice.currentTopFilterSelected
  );
  const selectedSortValue = useSelector(
    (state: any) => state.navBarSlice.selectedSortValue
  );
  const prices = useSelector((state: any) => state.filterSlice.prices);
  const selectedBrand = useSelector((state: any) => state.filterSlice.Brand);
  const selectedColor = useSelector((state: any) => state.filterSlice.Colors);
  const [productDetails, setProductDetails] = React.useState<any[]>([]);
  const [searchedProductDetails, setSearchedProductDetails] = React.useState<
    any[]
  >([]);
  const dispatch = useDispatch();

  const topFiltes = useSelector((state: any) => state.navBarSlice.topFilters);

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
      dispatch(setProductsDetails(details?.productDetails));
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

  function handleSortProducts(filteredProducts: any) {
    switch (selectedSortValue.name) {
      case "Price: Low to High":
        return filteredProducts.sort((a: any, b: any) => a.price - b.price);
      case "Price: High to Low":
        return filteredProducts.sort((a: any, b: any) => b.price - a.price);
      case "Popularity":
        return filteredProducts.sort((a: any, b: any) => b.rating - a.rating);
      default:
        return filteredProducts;
    }
  }

  // useEffect(() => {
  //   return () => {
  //     dispatch(resetWishList([]));
  //   };
  // }, []);

  //search functionality
  useEffect(() => {


    let categoryName = selectedCategory?.map((category: any) =>
      category?.filterName?.toLowerCase()
    );
    let selectedColorNames = selectedColor?.map((color: any) =>
      color?.filterName?.toLowerCase()
    );
    let pricesString = prices?.filterName;
    let [min, max] = ["0", "0"];
    if (pricesString?.length > 0) {
      [min, max] = [pricesString.split(" ")[1], pricesString.split(" ")[4]];
    }
    let brandsName = selectedBrand?.map((brand: any) =>
      brand?.filterName.toLowerCase()
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
        if (
          product?.colors?.some((item: any) => {
            return selectedColorNames.join("").includes(item.toLowerCase());
          })
        ) {
          return product;
        } else if (selectedColorNames.length === 0) {
          return product;
        }
      })
      .filter((product) => {
        // ['3-9'] ---> "3-9" ===> [3,9]
        if (currentSelectedFilter === null) return product;
        if (topFiltes[currentSelectedFilter].selectedValues.length === 0)
          return product;
        let selectedAges = topFiltes[currentSelectedFilter].selectedValues
          .join()
          .split("-");
        console.log(
          selectedAges,
          "selectedAges",
          topFiltes[currentSelectedFilter]
        );
        if (topFiltes[currentSelectedFilter].name != "Ages") return product;
        let productAge = product.age;
        let [min, max] = [parseInt(selectedAges[0]), parseInt(selectedAges[1])];
        if (min >= productAge[0] && min <= productAge[1]) {
          return product;
        } else if (max >= productAge[0] && max <= productAge[1]) {
          return product;
        } else if (selectedAges.length === 0) {
          return product;
        }
      }) //search by title
      .filter((product: any) => {
        return product.title
          .toLowerCase()
          .includes(globalSearchValue.toLowerCase());
      });
    const sortedValues = handleSortProducts(filteredProducts);
    setSearchedProductDetails(sortedValues);
  }, [
    globalSearchValue,
    productDetails,
    prices,
    selectedBrand,
    selectedCategory,
    selectedColor,
    topFiltes,
    currentSelectedFilter,
    selectedSortValue,
  ]);

  return (
    <>
      <ProductCategory productDetails={searchedProductDetails} />
    </>
  );
}
