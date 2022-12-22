import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-light bg-light justify-content-between">
        {/* Add album link  */}
        <Link className="navbar-brand" to="/">
          Album Lists
        </Link>
        <form className="form-inline">
          <Link to="/add-album">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Add Album
            </button>
          </Link>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
