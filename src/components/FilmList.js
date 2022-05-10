import React from "react";

const FilmList = ({films}) => {
  const filmNodes = films.map(film => {
    return (
      <li key={film.id} name={film.name} url={film.url}>{film.name}</li>
    )
  })

  return (
    <ul>
      {filmNodes}
    </ul>
  )
}

export default FilmList;