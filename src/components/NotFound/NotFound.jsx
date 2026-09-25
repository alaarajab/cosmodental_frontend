import { Link } from "react-router-dom";
import "../Legal/Legal.css";

function NotFound() {
  return (
    <div className="legal" style={{ textAlign: "center" }}>
      <h1>Page not found</h1>
      <p>Sorry, we couldn’t find that page. It may have moved.</p>
      <p>
        <Link to="/" className="btn btn--primary" style={{ color: "#fff" }}>
          Go to the home page
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
