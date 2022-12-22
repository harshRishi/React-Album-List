import { useState } from "react";
import { Link } from "react-router-dom";

function AddAlbum({ addAlbum }) {
  // Dummy state as required by the project
  const [newUserId, setNewUserId] = useState("");
  const [newtitle, setNewTitle] = useState("");

  // setter functions
  function handleUserIdChange(e) {
    setNewUserId(e.target.value);
  }
  function handleTitleChange(e) {
    setNewTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="AddAlbum">
      <div className="container p-4">
        <div className="card p-4">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3">Enter New Album Details</h2>
            <div className="form-group mb-3">
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter User Id"
                onChange={handleUserIdChange}
                value={newUserId}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Album Title"
                value={newtitle}
                onChange={handleTitleChange}
              />
            </div>
            <Link
              to="/"
              type="submit"
              className="btn btn-primary"
              onClick={() => addAlbum(newUserId, newtitle)}
            >
              Add to List
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAlbum;
