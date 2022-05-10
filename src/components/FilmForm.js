import React, { useState } from "react";

const FilmForm = ({onFilmSubmit}) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  }

  const handleFilmSubmit = (event) => {
    event.preventDefault();

    const nameToAdd = name.trim();
    const urlToAdd = url.trim();

    if (!nameToAdd || !urlToAdd) {
      return;
    }

    onFilmSubmit({
      name: nameToAdd,
      url: urlToAdd
    })

    setName('');
    setUrl('');
  }

  return (
    <form onSubmit={handleFilmSubmit}>
      <input 
        type="text"
        placeholder="Name of the movie"
        value={name}
        onChange={handleNameChange}
      />
      <input 
        type="text"
        placeholder="url"
        value={url}
        onChange={handleUrlChange}
      />
      <input 
        type="submit"
        value="Post"
      />
    </form>
  )
}

export default FilmForm;