import { useState, useEffect } from "react";
import { FetchApi } from "../FetchAPI/FetchAPI";
import { RenderFilms } from "../RenderFilms/RenderFilms";
const fetchFilms = new FetchApi();

function HomeView({ setFinalFilms }) {
  const [films, setFilms] = useState(null);
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    setStatus("pending");
    fetchFilms.fetchFilms().then((fetchResponse) => {
      if (fetchResponse.data.results.length > 0) {
        setFilms(fetchResponse.data.results);
        setStatus("resolved");
        setFinalFilms(fetchResponse.data.results);
      } else {
        setStatus("rejected");
      }
      console.log(fetchResponse.data.results);
    });
  }, []);
  if (status === "resolved") {
    return <RenderFilms films={films} />;
  }
}

export { HomeView };
