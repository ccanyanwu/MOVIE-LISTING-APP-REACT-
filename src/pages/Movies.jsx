import { useState } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import SubMovie from "../components/SubMovie";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import { FaSearch } from "react-icons/fa";

const Movies = () => {
  const baseUrl = "https://api.themoviedb.org";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [url, setUrl] = useState(
    `${baseUrl}/3/movie/popular?api_key=${API_KEY}`
  );

  //fetch search results
  const searchMovies = async () => {
    const response = await axios.get(
      `${baseUrl}/3/search/movie?api_key=${API_KEY}&query=${searchText}&adult=true`
    );
    setSearchData(response.data);
  };

  //fetch popular movies
  const { data, loading, error } = useFetch(url);
  const handleSearch = async (e) => {
    setSearchText(e.target.value);
    if (searchText.trim().length > 0) {
      setUrl(
        `${baseUrl}/3/search/movie?api_key=${API_KEY}&query=${searchText}&adult=true`
      );
      searchMovies();
      return <NotFound />;
    }
  };

  if (loading) return <Spinner />;
  if (error) return <NotFound />;
  return (
    <>
      <h2 className="searchMovieHeader">Search For Movies</h2>
      <article className="filter">
        <div className="filter-search">
          <input
            type="search"
            className="searchTerm"
            placeholder="Enter movie genre you want"
            value={searchText}
            onChange={handleSearch}
          />
          <button
            type="submit"
            className="searchButton"
            onClick={() =>
              searchText.length === 0
                ? alert("please type in your search term")
                : handleSearch
            }
          >
            <FaSearch />
          </button>
        </div>
        <em className="guide">
          *Genres include: action, adventure, animation, comedy, crime,
          documentary, drama, family, fantasy,history, horror, music, mystery,
          romance, science fiction,TV Movie, thriller, war and western
        </em>
        {/* Movie search results */}
        <section className="movies">
          {searchData !== null &&
            searchText !== "" &&
            searchData.results.map((movie) => (
              <SubMovie key={movie.id} movie={movie} />
            ))}
          {data !== null &&
            searchText === "" &&
            data.map((movie) => <SubMovie key={movie.id} movie={movie} />)}
        </section>
      </article>
    </>
  );
};

export default Movies;
