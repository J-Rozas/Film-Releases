import React from "react";

const Film = ({name, url}) => {
  return (
    <>
      <h3>{name}</h3>
      <a href={url}>link</a>
    </>
  )
}

export default Film;