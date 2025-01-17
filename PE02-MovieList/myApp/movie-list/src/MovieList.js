import React, { useState } from "react";

const MovieList = () => {
  const movieData = [
    { title: "Toy Story", genre: "Animation", year: 1996 },
    { title: "Aliens", genre: "Horror", year: 1989 },
    { title: "Avengers Endgame", genre: "Superhero", year: 2019 },
    { title: "The Lion King", genre: "Animation", year: 1994 },
    { title: "Kong Skull Island", genre: "Creature Sci-Fi", year: 2017 },
    { title: "RRR", genre: "Action Drama", year: 2022 },
    { title: "Aladdin", genre: "Animation", year: 1993 },
    { title: "The Prosposal", genre: "Romantic Comedy", year: 2009 },
    { title: "The Nun", genre: "Horror", year: 2019 },
    { title: "Avengers", genre: "Superhero", year: 2012 },
    { title: "John Wick", genre: "Action", year: 2014 },
    { title: "Godzilla vs Kong", genre: "Creature Sci-Fi", year: 2021 },
    { title: "Titanic", genre: "Romance", year: 1998 },
    { title: "Yeh Jawaani Hai Deewani", genre: "Romantic Comedy", year: 2013 },
    { title: "Gladiator", genre: "Period Drama", year: 2000 },
    { title: "Annabelle", genre: "Horror", year: 2014 },
    { title: "Zindagi Naa Milegi Dobaara", genre: "Romantic Comedy", year: 2011 },
    { title: "Avengers Infinity War", genre: "Superhero", year: 2018 },
    { title: "Godzilla: King of Monsters", genre: "Creature Sci-Fi", year: 2019 },
    { title: "The Conjuring", genre: "Horror", year: 2013 },
    { title: "When Harry met Sally", genre: "Romantic Comedy", year: 1984 },
    { title: "Frozen", genre: "Animation", year: 2013 },
  ];

  const genres = ["All", ...new Set(movieData.map((movie) => movie.genre))];
  const [selectedGenre, setSelectedGenre] = useState("All");
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };
  const showMovieTitle = (title) => {
    alert(`You clicked on: ${title}`);
  };
  const filteredMovies = selectedGenre === "All"
    ? movieData
    : movieData.filter((movie) => movie.genre === selectedGenre);
  return (
    <div>
      <h2>Movies List</h2>

      {/* Genre Filter Dropdown */}
      <select onChange={handleGenreChange} value={selectedGenre}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Movie List */}
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.title} onClick={() => showMovieTitle(movie.title)}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
