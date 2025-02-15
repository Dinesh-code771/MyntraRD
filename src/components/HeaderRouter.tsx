import React from "react";
import { Link } from "react-router-dom";
export default function HeaderRouter({
  titles,
}: {
  titles: { title: string; link: string }[];
}) {
  return (
    <div className="flex gap-4">
      {titles.map((title, index) => (
        <div key={index} className="flex items-center gap-2">
          {index !== titles.length - 1 ? (
            <Link className="text-gray-500 text-sm" to={`/${title.link}`}>
              {title.title}
            </Link>
          ) : (
            <p className="text-gray-500 text-sm">{title.title}</p>
          )}
          {index !== titles.length - 1 && (
            <div className=" flex items-center justify-center">/</div>
          )}
        </div>
      ))}
    </div>
  );
}
