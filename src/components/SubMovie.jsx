import {Link} from 'react-router-dom'

const SubMovie = ({ movie }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p";

  //Format Date
  const releaseDate = movie.release_date
    ? `${new Date(movie.release_date).toLocaleString("default", {
        month: "long",
      })} ${new Date(movie.release_date).getFullYear()}`
    : `${new Date(movie.first_air_date).toLocaleString("default", {
        month: "long",
      })} ${new Date(movie.first_air_date).getFullYear()}`;

  return (
    <Link to={`/movies/${movie.id}`} className="subMovieItem">
      <img
        src={`${IMAGE_URL}/original/${movie.poster_path}`}
        alt={movie.name ?? movie.title}
      />
      <div>
        <p>{movie.name ?? movie.title}</p>
        <p>{movie.release_date ? `Released: ${releaseDate}` : `Aired: ${releaseDate}` }</p>
      </div>
    </Link>
  );
};

export default SubMovie;
