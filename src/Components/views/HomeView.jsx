import { useState, useEffect } from "react";
import { FetchApi } from "../FetchAPI/FetchAPI";
import { RenderFilms } from "../RenderFilms/RenderFilms";
const fetchFilms = new FetchApi();

function HomeView() {
  const [films, setFilms] = useState(null);
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    setStatus("pending");
    fetchFilms.fetchFilms().then((fetchResponse) => {
      console.log(fetchResponse);
      if (fetchResponse.data.results.length > 0) {
        setFilms(fetchResponse.data.results);
        setStatus("resolved");
      } else {
        setStatus("rejectes");
      }
      console.log(fetchResponse.data.results);
    });
  }, []); //Компонент монтируется каждый раз при переходе на другую вкладку
  if (status === "resolved") {
    return <RenderFilms films={films} />;
  }
}

export { HomeView };
