import React, { useEffect,useState } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Movie from "./Components/Movie";
import axios from "axios";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=3ed5efb9";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(MOVIE_API_URL)
    .then((res) => {
      setMovies(res.data.Search)
      setLoading(false);
    })
  }, []);


  const search = searchVal => {
    setLoading(true);
    setErrorMessage(null);

    axios.get(`https://www.omdbapi.com/?s=${searchVal}&apikey=4a3b711b`)
    .then((res) => {
      console.log(res)
      if(res === "True"){
        setMovies(res.data.Search) 
        setLoading(false);
      } else {
        setErrorMessage(res.data.Error);
        setLoading(false);
      }
    })
  }

  return (
    <div className="App">
        <Header />
        <Search forSearch={search}/>
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div>
          {loading && !errorMessage ? (<span>Loading...</span>) : errorMessage ? 
          (<div className="errorMessage">{errorMessage}</div>) : 
          (movies?.map((movie,index) => {
            <div>
              return
            <Movie key={`${index}-${movie.Title}`} movie={movie}/>
            </div>
          }))}
        </div>
    </div>
  );
}

export default App;
