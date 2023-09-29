import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "API";
function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReview(movieId)
      .then((data) => {
        setReviews(data.reviews);
      })
      .catch((error) => {
        console.log("Error with reviews", error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>Content: {review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available yet.</p>
      )}
    </div>
  );
}

export default Reviews;
