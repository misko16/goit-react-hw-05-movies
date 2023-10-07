import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "API";
import ReviewsList from "components/refactoring/ReviewList";

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReview(movieId)
      .then((data) => {
        console.log('Data for reviews:', data); 
        setReviews(data);
      })
      .catch((error) => {
        console.log("Error with reviews", error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews && reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>No reviews available yet.</p>
      )}
    </div>
  );
}

export default Reviews;
