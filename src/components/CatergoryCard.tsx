import React from "react";

export default function CatergoryCard({
  src,
  alt,
  width,
  height,
  title,
}: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center  rounded-md text-black  min-w-[60px] max-w-[60px] shadow-lg">
      <img className="bg-[#c8d0e9]" src="" alt="" width={100} height={50} />
      <p className="text-xs py-1  px-2 ">{title}</p>
    </div>
  );
}
