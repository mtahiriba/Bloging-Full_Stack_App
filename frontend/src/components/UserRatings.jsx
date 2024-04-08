import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { ratingBlog } from "../Network/blog.network";
import { toast } from "react-toastify";

const UserRatings = ({ id, isRatingChanged, setIsRatingChanged }) => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    ratingBlog(rate, id, localStorage.getItem("UserToken"))
      .then((res) => {
        toast.success(res.data.message);
        setIsRatingChanged(!isRatingChanged);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <div>
      <StarRatings
        rating={rating}
        starRatedColor="yellow"
        changeRating={handleRating}
        numberOfStars={6}
        name="rating"
      />
    </div>
  );
};

export default UserRatings;
