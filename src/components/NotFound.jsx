import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = ({ message }) => {
  return (
    <div className="hero">
      <div className=" hero-content">
        <div className="max-w-lg">
          <h1>Oops!</h1>
          <p>{message}</p>
          <Link to="/">
            <FaHome />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};
NotFound.defaultProps = {
  message: "page not found",
};
//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
export default NotFound;
