import React, { useState } from "react";
import FilmList from "../components/FilmList";
import FilmForm from "../components/FilmForm";


// filmBox CONTAINER that has a useState HOOK inside
const FilmBox = () => {
  // Set initial state of the component (i.e., how it looks by "default")
  const [films, setFilms] = useState (
    [
      {
        id: 1,
        name: "Spider-Man: Into the Spider-Verse",
        url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
      },
      {
        id: 2,
        name: "Life Itself",
        url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
      },
      {
        id: 3,
        name: "Mary Queen of Scots",
        url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
      },
      {
        id: 4,
        name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
      },
      {
        id: 5,
        name: "Captain Marvel",
        url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
      }
    ]
  )

  // Create function to add a new film
  // This function is going to be referenced from 
  const addFilm = (newFilm) => {
    // Set id of the new film to the current date (when the film is added)
    newFilm.id = Date.now();
    // Initialise variable to the current list of films plus the new film that we are going to add
    const updatedFilms = [...films, newFilm];
    // update films with the list of the films that includes the new film
    setFilms(updatedFilms);
  }


  return (
    <>
      <FilmList films={films}></FilmList>
      <FilmForm onFilmSubmit={addFilm}></FilmForm>
    </>
  )
}

export default FilmBox;