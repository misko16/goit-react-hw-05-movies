import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "API";
function Reviews () {

const {movieId} = useParams();
const{reviews, setReviews} = useState([]);

useEffect(() => {
  fetchMovieReview(movieId)
    .then((data) => {
      setReviews(data.reviews);
    })
    .catch((error) => {
      console.log(`Problems with reviews`, error);
    });
}, [movieId, setReviews]);


return(
    <div>
        <h2>Reviews</h2>
        <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
    )
}
export default Reviews;