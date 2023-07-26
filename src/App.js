import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Movie from "./Components/Movie";
import axios from "axios";


function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const search = searchVal => {
    setLoading(true);
    setErrorMessage(null);
    if (searchVal.trim() != "") {
      axios.get(`https://www.omdbapi.com/?s=${searchVal}&apikey=4a3b711b`)
        .then((res) => {
          if (res.data.Response === "True") {
            setMovies(res.data.Search)
            setLoading(false)
          } else {
            setErrorMessage(res.data.Error)
          }
        }
        )
    } else {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <Header />
      <Search forSearch={search} />
      <div>
        {loading && !errorMessage ? (<span className="flex justify-center m-10">Loading...</span>) : errorMessage ?
          (<div className="flex justify-center m-10">{errorMessage}</div>) :
          (<div className="flex justify-center items-center gap-4 mt-6 flex-wrap"> {movies?.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))}</div>)}
      </div>
    </div>
  );
}

export default App;
