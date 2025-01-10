import React from "react";
import { useNavigate } from "react-router-dom";
export default function ShopByCategory({
  title,
  images,
}: {
  title: string;
  images: { categoryName: string; src: string }[];
}) {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="text-center font-semibold text-[3rem] text-[#2E55f3] uppercase">
        {title}
      </h3>
      <div className="sections">
        <div className="section grid grid-cols-1 md:grid-cols-5 justify-center items-center gap-3">
          {images.map((image, index) => {
            return (
              <div
                onClick={() => navigate(`/category/${image.categoryName}`)}
                className="imgWrapper cursor-pointer flex-1"
              >
                <img
                  className="w-full"
                  src={image.src}
                  height={150}
                  alt={title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
