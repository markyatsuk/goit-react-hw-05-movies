function RenderFilms({ films }) {
  return (
    <ul>
      {films.map(({ original_title, id }) => (
        <li key={id}>{original_title}</li>
      ))}
    </ul>
  );
}
export { RenderFilms };
