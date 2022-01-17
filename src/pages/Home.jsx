import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import SubMovie from "../components/SubMovie";

const Home = ({ movies, loading, error }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p";
  //split movies to get top after poster movie
  let subMovies, titleMovies;
  if (movies !== null) {
    //titleMovies 
    subMovies = movies.slice(1, 7);
  }

  if (loading) return <Spinner />;
  if (error)
    return (
      <p className="error">Could not fetch data. Please check your network</p>
    );

  return (
    <>
      {/* Poster Movie */}
      <section className="poster">
        <h2>TRENDING MOVIES</h2>
        <div>
          <Link to={`/movies/${movies[0].id}`}>
            {movies && (
              <img
                src={`${IMAGE_URL}/w300/${movies[0].poster_path}`}
                alt={`${movies[0].title ?? movies[0].name} poster`}
              />
            )}
          </Link>
          <p>{movies[0].title ?? movies[0].name}</p>
        </div>
      </section>
      {/* SubMovies */}
      <section className="subMovies">
        {subMovies !== null &&
          subMovies.map((movie) => <SubMovie key={movie.id} movie={movie} />)}
      </section>
      <Link to='/movies' className="moreMovies">More Movies</Link>
    </>
  );
};

export default Home;
