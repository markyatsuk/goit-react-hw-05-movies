import { useState, useEffect } from "react";
import { FetchApi } from "../FetchAPI/FetchAPI";
import { RenderFilms } from "../RenderFilms/RenderFilms";
const fetchFilms = new FetchApi();

export default function HomeView({ setFinalFilms }) {
  const [films, setFilms] = useState(null);
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    setStatus("pending");
    fetchFilms.fetchFilms().then(({ data }) => {
      if (data.results.length > 0) {
        setFilms(data.results);
        setStatus("resolved");
        setFinalFilms(data.results);
      } else {
        setStatus("rejected");
      }
      console.log(data.results);
    });
  }, []);
  if (status === "resolved") {
    return <RenderFilms films={films} />;
  }
}
