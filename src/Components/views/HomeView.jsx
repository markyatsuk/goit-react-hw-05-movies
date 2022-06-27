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
      } else {
        setStatus("rejected");
      }
    });
  }, []);
  if (status === "resolved") {
    return (
      <>
        <h1>Popular Films</h1>
        <RenderFilms films={films} />
      </>
    );
  }
}
