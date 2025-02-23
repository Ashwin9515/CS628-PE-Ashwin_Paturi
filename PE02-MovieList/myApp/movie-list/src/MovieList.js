import React, { useState } from "react";

const MovieList = () => {
  const movieData = [
    { title: "Avengers Endgame", genre: "Superhero", year: 2019 },
    { title: "Aliens", genre: "Horror", year: 1989 },
  ];

  const genres = ["All", ...new Set(movieData.map(movie => movie.genre))];
  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleGenreChange = (e) => setSelectedGenre(e.target.value);

  const filteredMovies = selectedGenre === "All"
    ? movieData
    : movieData.filter(movie => movie.genre === selectedGenre);

  return (
    <div>
      <h2>Movies List</h2>

      {/* Genre Filter */}
      <select onChange={handleGenreChange} value={selectedGenre}>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      {/* Movie List */}
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie.title} onClick={() => alert(`You clicked on: ${movie.title}`)}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;