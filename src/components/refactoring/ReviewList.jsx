const ReviewsList = ({ reviews }) => { // Зверніть увагу на дужки {}
    return (
          reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>Content: {review.content}</p>
            </li>
          ))
    );
  };
  
  export default ReviewsList;
  