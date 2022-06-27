import { FetchApi } from "../FetchAPI/FetchAPI";
import { useEffect, useState } from "react";
import { RenderReviews } from "../RenderFilms/RenderReviews";
const fetchAPI = new FetchApi();
export default function Review({ id }) {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetchAPI.fetchReviewById(id).then((response) => {
      setReviews(response.data.results);
    });
  }, [id]);

  if (reviews) {
    if (reviews.length === 0) {
      return <h2>No review for this film </h2>;
    } else {
      return <RenderReviews reviews={reviews} />;
    }
  }
}
