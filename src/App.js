import { useState } from 'react';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import { moviesData } from './Data';
import { Routes, Route, Link } from "react-router-dom";
import MoviePage from './components/MoviePage';
import Home from './components/Home';




function App() {
  const [movies,setMovies] = useState(moviesData);
  const [searchValue,setSearchValue] = useState("");
  const [searchRating,setSearchRating] = useState(0);

  const handleSearch=(e) => {
   setSearchValue(e.target.value)
 }

 const handleRating=(e) => {
  setSearchRating(Number(e.target.value))
}


  const AddMovie = () => {
    const data = {
      imageSrc: document.getElementsByName("imageSrc")[0].value,
      rating: Number(document.getElementsByName("rating")[0].value),
      title: document.getElementsByName("title")[0].value,
      description: document.getElementsByName("des")[0].value
    };
    setMovies([...movies, data]);
    document.getElementsByName("title")[0].value = "";
    document.getElementsByName("imageSrc")[0].value = "";
    document.getElementsByName("rating")[0].value = 0;
    document.getElementsByName("des")[0].value = "";
}

  return (
    <>
      <Routes>
        <Route index element={<Home movies={movies} searchValue={searchValue} handleSearch={handleSearch} searchRating={searchRating} handleRating={handleRating} AddMovie={AddMovie} />} />
        <Route path="/moviepage/:title" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
