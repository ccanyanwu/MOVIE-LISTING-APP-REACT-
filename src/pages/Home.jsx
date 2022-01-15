import { Link } from "react-router-dom";

const Home = ({ movies, loading, error }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p";

  return (
    <>
      {/* Poster Movie */}
      <section className="poster">
        <h2>TRENDING MOVIES</h2>
        {!loading ? (
          <div>
            <Link to={`/movies/${movies[0].id}`}>
              {movies && error === null ? (
                <img
                  src={`${IMAGE_URL}/w300/${movies[0].poster_path}`}
                  alt={`${movies[0].poster_path}`}
                />
              ) : (
                "error"
              )}
            </Link>
            <p></p>
          </div>
        ) : (
          <h3>error</h3>
        )}
      </section>
      {/* SubMovies */}
      <section className="subMovies"></section>
    </>
  );
};

export default Home;
