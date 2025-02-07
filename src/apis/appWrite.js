import { colors } from "@mui/material";
import { Client, Databases, ID } from "appwrite";
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("676a1d49003bb5132d38");

const databases = new Databases(client);

// const promise = databases.updateDocument(
//   "676a1ec4001bf5b712d9", //dabase id
//   "676a1ee4001ae452e2df", // collectoin id
//   "677de5d100032d5b630a",
//   {
//     CategoryType: "mens",
//     // productDetails: JSON.stringify([
//     //   {
//     //     id: 1,
//     //     title: "T-shirt",
//     //     decription: "This is a t-shirt",
//     //     catergoryType: "shirts",
//     //     brand: "puma",
//     //     colors: ["yellow"],
//     //     gender: "boy",
//     //     discount: 10,
//     //     age: [10, 12],
//     //     countryOforigin: "India",
//     //     size: "M",
//     //     bundles: "single",
//     //     price: 100,
//     //     images: [
//     //       "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30038122/2024/6/25/ff5b98c6-8810-4112-8168-fe3137d73f831719286665911KurtaSets1.jpg",
//     //       "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30038122/2024/6/25/87e99c42-b8cd-4f1c-8f3f-80382950e66c1719286665860KurtaSets3.jpg",
//     //     ],
//     //     rating: 4,
//     //     likes: "200",
//     //   },
//     //   {
//     //     id:2,
//     //     title: "Shirt",
//     //     decription: "This is a shirt",
//     //     catergoryType: "Shirt",
//     //     brand: "nike",
//     //     colors: ["red"],
//     //     gender: "boy",
//     //     discount: 20,
//     //     age: [10, 12],
//     //     countryOforigin: "china",
//     //     size: "L",
//     //     bundles: "single",
//     //     price: 200,
//     //     images: [
//     //       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/30266842/2024/7/20/390cad5f-8a26-4580-b2e1-963d7191c10e1721466980164-Sangria-Printed-Cotton-Straight-Kurta-3961721466979852-1.jpg",
//     //       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/30266842/2024/7/20/390cad5f-8a26-4580-b2e1-963d7191c10e1721466980164-Sangria-Printed-Cotton-Straight-Kurta-3961721466979852-1.jpg",
//     //     ],
//     //     rating: 5,
//     //     likes: "300",
//     //   },
//     //   {
//     //     id:3,
//     //     title: "Jeans",
//     //     decription: "This is a jeans",
//     //     catergoryType: "dresses",
//     //     brand: "adidas",
//     //     colors: ["red"],
//     //     gender: "girl",
//     //     discount: 30,
//     //     age: [10, 12],
//     //     countryOforigin: "china",
//     //     size: "L",
//     //     bundles: "single",
//     //     price: 300,
//     //     images: [
//     //       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/14/DuNyL1qH_0de8129099ad4109862c0ffbe6351cfe.jpg",
//     //       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/14/DuNyL1qH_0de8129099ad4109862c0ffbe6351cfe.jpg",
//     //     ],
//     //     rating: 3,
//     //     likes: "100",
//     //   },
//     //   {
//     //     id:4,
//     //     title: "hoodies",
//     //     decription: "This is a hoodie",
//     //     price: 400,
//     //     catergoryType: "sweaters",
//     //     brand: "puma",
//     //     colors: ["black", "white"],
//     //     gender: "boy",
//     //     discount: 40,
//     //     age: [10, 12],
//     //     countryOforigin: "USA",
//     //     size: "L",
//     //     bundles: "single",
//     //     images: [
//     //       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16253478/2023/12/30/4623787d-4536-46c7-87df-713d0e8cbb831703935532500YKDisneyGirlsPinkPrintedHoodedSweatshirt1.jpg",
//     //       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16253478/2023/12/30/4623787d-4536-46c7-87df-713d0e8cbb831703935532500YKDisneyGirlsPinkPrintedHoodedSweatshirt1.jpg",
//     //     ],
//     //     rating: 4,
//     //     likes: "150",
//     //   },
//     //   {
//     //     id:5,
//     //     title: "sweatshirt",
//     //     decription: "This is a sweatshirt",
//     //     price: 500,
//     //     catergoryType: "sweaters",
//     //     brand: "adidas",
//     //     colors: ["yellow", "blue"],
//     //     discount: 50,
//     //     age: [15, 20],
//     //     countryOforigin: "Japan",
//     //     size: "M",
//     //     images: [
//     //       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/31623792/2025/1/13/e336457c-5d20-4a4e-9128-83c2d7cb37651736755993740-BAESD-Kids-Printed-Cotton-Hood-Long-Sleeves-Hooded-Sweatshir-1.jpg",
//     //       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/31623792/2025/1/13/e336457c-5d20-4a4e-9128-83c2d7cb37651736755993740-BAESD-Kids-Printed-Cotton-Hood-Long-Sleeves-Hooded-Sweatshir-1.jpg",
//     //     ],
//     //     rating: 5,
//     //     likes: "400",
//     //   },
//     //   {
//     //     id:6,
//     //     title: "Dress",

//     //     decription: "This is a Dress",
//     //     catergoryType: "dresses",
//     //     brand: "nike",
//     //     colors: ["red"],
//     //     discount: 60,
//     //     age: [10, 15],
//     //     countryOforigin: "china",
//     //     size: "L",
//     //     bundles: "single",

//     //     price: 500,
//     //     images: [
//     //       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28907450/2024/4/13/d0d7fb7a-24d8-4d6a-b055-19dee2ed30911712991412387Jumpsuit1.jpg",
//     //       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28907450/2024/4/13/d0d7fb7a-24d8-4d6a-b055-19dee2ed30911712991412387Jumpsuit1.jpg",
//     //     ],
//     //     rating: 5,
//     //     likes: "250",
//     //   },
//     // ]),
//     // // topFilters: JSON.stringify([
//     // //   {
//     // //     name: "Age",
//     // //     values: [
//     // //       "0-3",
//     // //       "3-6",
//     // //       "6-9",
//     // //       "9-12",
//     // //       "12-15",
//     // //       "15-18",
//     // //       "18-21",
//     // //       "21-24",
//     // //       "24-27",
//     // //       "27-30",
//     // //       "30-33",
//     // //       "33-36",
//     // //       "36-39",
//     // //       "39-42",
//     // //       "42-45",
//     // //       "45-48",
//     // //     ],
//     // //     selectedValues: [],
//     // //   },
//     // //   {
//     // //     name: "Bundles",
//     // //     values: ["budles", "singleStyles"],
//     // //     selectedValues: [],
//     // //   },

//     // //   {
//     // //     name: "Country of origin",
//     // //     values: ["India", "China", "USA"],
//     // //     selectedValues: [],
//     // //   },
//     // //   { name: "Size", values: ["S", "M", "L", "XL"], selectedValues: [] },
//     // // ]),
//     // selectedFilters: JSON.stringify(
//     //   {
//     //     Categorie: [],
//     //     Brand: [],
//     //     Colors: [],
//     //     Discount: [],
//     //     Gender: [],
//     //     prices: {},
//     //     params: "kids",
//     //   },
//     // ),
//     wishListItems: JSON.stringify([]),
//   }
// );

export { client, databases };

// databases
//   .getDocument(
//     "676a1ec4001bf5b712d9",
//     "676a1ee4001ae452e2df",
//     "676cc1a7001c009ca249"
//   )
//   .then((response) => {
//     console.log(
//       "Documents:",
//       response.productDetails,
//       typeof response,
//       JSON.parse(response.brands)[0]
//     );
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
