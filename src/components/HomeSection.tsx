import React from "react";
import Search from "./Search";
import Categories from "./Categories";
import Banners from "./Banners";
import useWindowSize from "../hooks/useWindowSize";
import Brands from "./Brands";

export default function HomeSection() {
  const { width, height } = useWindowSize();
  return (
    <div className="p-2 flex flex-col gap-2">
      <Search
        placeholder={"Search by branch and category"}
        className="rounded-full shadow-lg overflow-hidden px-2 md:hidden"
      />
      <Categories />
      <Banners
        banner={
          width > 880
            ? [
                {
                  src: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
                  alt: "",
                },
                {
                  src: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/1/1260f21c-497c-44bf-bd38-c7fc088d43ac1733075353899-Prebuzz_1920x504.jpg",
                  alt: "",
                },
              ]
            : [
                {
                  src: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_414,c_limit,fl_progressive/w_394,q_50,dpr_2,fl_progressive/assets/images/2024/DECEMBER/2/dFWjjYZG_3ee3baf3f9b44cafafb4d8ea416464b4.jpg",
                  alt: "",
                },
                {
                  src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_414,c_limit,fl_progressive/w_394,q_50,dpr_2,fl_progressive/assets/images/2024/12/1/fd62d5d6-9ae6-486f-810b-d060197869b81733069583317-h-m-msb1.png",
                  alt: "",
                },
                {
                  src: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_414,c_limit,fl_progressive/w_394,q_50,dpr_2,fl_progressive/assets/images/2024/DECEMBER/2/dFWjjYZG_3ee3baf3f9b44cafafb4d8ea416464b4.jpg",
                  alt: "",
                },
                {
                  src: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_414,c_limit,fl_progressive/w_394,q_50,dpr_2,fl_progressive/assets/images/2024/DECEMBER/2/dFWjjYZG_3ee3baf3f9b44cafafb4d8ea416464b4.jpg",
                  alt: "",
                },
              ]
        }
      />
      <Brands
        title="brands"
        sections={[
          {
            src: [
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
            ],
            alt: [
              "boohooMan",
              "boohooMan",
              "GANT",
              "GANT",
              "GANT",
              "boohooMan",
            ],
          },
          {
            src: [
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/437645a4-988c-4f53-aff3-b1fdb34938481690773011106-FCUK.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0c399e2c-9797-483d-bf6c-0852d5d21db21690773010989-BHPC.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
            ],
            alt: [
              "boohooMan",
              "boohooMan",
              "GANT",
              "GANT",
              "GANT",
              "boohooMan",
            ],
          },
          {
            src: [
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
            ],
            alt: [
              "boohooMan",
              "boohooMan",
              "GANT",
              "GANT",
              "GANT",
              "boohooMan",
            ],
          },
        ]}
      />
    </div>
  );
}
