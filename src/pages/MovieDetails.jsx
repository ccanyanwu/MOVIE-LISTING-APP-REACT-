import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";

const MovieDetails = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const baseUrl = "https://api.themoviedb.org";
  //fetch movie detail
  const { singleData, loading, error } = useFetch(
    `${baseUrl}/3/movie/${params.movieId}?api_key=${API_KEY}&language=en-US`
  ); console.log(singleData);

  if (loading) return <Spinner />;
  if (error)
    return (
      <p className="error">The resource you requested could not be found</p>
    );
  return (
    <article className="movie">
      <img
        src={`https://image.tmdb.org/t/p/original/${singleData.poster_path}`} alt={singleData.title ?? singleData.name}
      />
      <section>
        <h1>{singleData.title ?? singleData.name}</h1>
        <ul>
          <li>
            Overview <span>: {singleData.overview}</span>
          </li>
          <li>
            Genre(s):
            {singleData.genres.length > 0 &&
              singleData.genres.map((genre, index) =>
                index === singleData.genres.length - 1 ? (
                  <span key={genre.id}>{`${genre.name}.`}</span>
                ) : (
                  <span key={genre.id}>{`${genre.name}, `}</span>
                )
              )}
          </li>
          <li>
            Release date <span> : {singleData.release_date ?? singleData.first_air_date} </span>
          </li>
          <li>
            Language:
            {singleData.spoken_languages  &&
              (singleData.spoken_languages.map((language, index) =>(
                index === singleData.spoken_languages.length - 1 ? (
                  <span key={index}>{`${language.english_name}.`}</span>
                ) : (
                  <span key={index}>{`${language.english_name}, `}</span>
                ))
              ))}
          </li>
          <li>
            Vote Average <span> : {singleData.vote_average} / 10</span>
          </li>
          <li>
            Runtime <span>: {singleData.runtime} minutes </span>
          </li>
         
        </ul>
      </section>
    </article>
  );
};

export default MovieDetails;
