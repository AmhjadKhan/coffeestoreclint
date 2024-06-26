import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReviewSlider = ({ reviews }) => {
  return (
    <div className="w-full flex justify-center">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Change interval as per your requirement
        stopOnHover={true}
        transitionTime={500} // Transition time in milliseconds
        className="review-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto lg:grid-cols-3"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="review-card p-4 border border-red-500 rounded-lg shadow-md"
          >
            <img
              src={review.imageUrl}
              alt={review.title}
              className="review-image rounded-full h-40 object-cover rounded-t-lg"
            />
            <div className="review-content p-4">
              <h2 className="review-title text-lg font-semibold mb-2">
                {review.title}
              </h2>
              <p className="review-body text-gray-700">{review.body}</p>
              <p className="review-author text-gray-500 mt-2">
                By {review.author}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return <ReviewSlider reviews={reviews} />;
};

export default Review;
