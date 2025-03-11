import React, { useState } from 'react';

const MovieList = () => {
  const movies = [
    { title: 'Avatar', genre: 'Sci-Fi', releaseYear: 2009 },
    { title: 'Avengers', genre: 'Superhero', releaseYear: 2012 },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const genres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  let filteredMovies;
  if (selectedGenre === 'All Genres') {
    filteredMovies = movies;
  } else {
    filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
  }

  return (
    <div>
      <h1>Movie List</h1>
      <select onChange={(e) => setSelectedGenre(e.target.value)}>
        {genres.map(genre => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => alert(movie.title)}>
            <h2>{movie.title}</h2>
            <p>{movie.genre} - {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;