import React from "react";
import ProductCategory from "./ProductCategory";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { listDocuments } from "../apis/listDocuments";

export default function ProductCategoryWrapper() {
  //useEffect to scroll to top
  const { name } = useParams<{ name: string }>();
  const [productDetails, setProductDetails] = React.useState<any[]>([]);
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

  return (
    <>
      <ProductCategory productDetails={productDetails} />
    </>
  );
}
