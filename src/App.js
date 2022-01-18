import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.themoviedb.org";
  const { data, loading, error } = useFetch(
    `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`
  );

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home movies={data} loading={loading} error={error} />}
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer movies={data} />
      </Router>
    </>
  );
}

export default App;
