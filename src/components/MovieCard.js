import React from "react";

function MovieCard({ title, posterURL = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg", genresArr }){
  return (
    <div className="movie-card">
      <img
        src={posterURL}
        alt={title}
      />
      <h2>{title}</h2>
      <small>{genresArr.join(", ")}</small>
    </div>
  )
}

export default MovieCard;
