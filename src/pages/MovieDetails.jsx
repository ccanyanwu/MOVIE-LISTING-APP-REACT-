import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams()
  console.log(params.movieId);
  return <div style={{backgroundColor: 'white !important'}}>{params.movieId}</div>;
};

export default MovieDetails;
