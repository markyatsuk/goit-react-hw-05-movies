import { FetchApi } from "../FetchAPI/FetchAPI";
import { useEffect, useState } from "react";
import { RenderCast } from "../RenderFilms/RenderCast";
const fetchAPI = new FetchApi();
function Cast({ id }) {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchAPI.fetchCastById(id).then(setCast);
  }, [id]);
  if (cast) {
    return <RenderCast cast={cast.data.cast} />;
  }
}
export { Cast };
