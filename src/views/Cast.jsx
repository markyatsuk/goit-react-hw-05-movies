import { FetchApi } from "../services/FetchAPI";
import { useEffect, useState } from "react";
import { RenderCast } from "../Components/RenderFilms/RenderCast";
const fetchAPI = new FetchApi();
export default function Cast({ id }) {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchAPI.fetchCastById(id).then(setCast);
  }, [id]);
  if (cast) {
    return <RenderCast cast={cast.data.cast} />;
  }
}
