import React, { useState } from "react";
import { FaStar, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
export default function ReviewComponent({
  review,
  rating,
  images,
}: {
  review: string;
  rating: number;
  images: string[];
}) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="contianer flex  gap-2">
      <div className="ratingStart ">
        <div className="ratingStar pt-1">
          <FaStar />
        </div>
      </div>
      <div className="details">
        <div className="review pb-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </p>
        </div>
        <div className="reviewImages py-5">
          <div className="reviewImage flex gap-2">
            {images?.map((image, index) => (
              <div
                className="reviewImage w-[40px] flex items-center justify-center h-[40px]"
                key={index}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="reviewer py-5 flex gap-2 items-center justify-between">
          <div className="reviewerName flex gap-2 items-center">
            <p>John Doe</p>
            <p>2 days ago</p>
          </div>
          <div className="likeComponent flex gap-5">
            <div className="like">
              <div className="likeIcon cursor-pointer flex gap-2 items-center">
                <FaThumbsUp onClick={() => setLike(like + 1)} />
                <p className="text-sm">{like}</p>
              </div>
            </div>
            <div className="dislike">
              <div className="dislikeIcon cursor-pointer flex gap-2 items-center">
                <FaThumbsDown onClick={() => setDislike(dislike + 1)} />
                <p className="text-sm">{dislike}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
