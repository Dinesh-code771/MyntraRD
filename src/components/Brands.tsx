import React from "react";

export default function Brands({
  title,
  sections,
}: {
  title: string;
  sections: { src: string[]; alt: string[] }[];
}) {
  const [current, setCurrent] = React.useState(0);
  return (
    <div>
      <h3>{title}</h3>

      <div className="sections">
        {
          <div className="section flex ">
            {sections[current].src.map((src, index) => {
              return (
                <div className="imgWrapper flex-1">
                  <img
                    className="w-full"
                    src={src}
                    height={150}
                    alt={sections[current].alt[current]}
                  />
                </div>
              );
            })}
          </div>
        }
      </div>

      {/* button */}
      <div className="buttons flex justify-center items-center">
        {sections.map((src, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full ${
                current === index ? "bg-black" : "bg-[#c6c6c6]"
              }  mx-1`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
