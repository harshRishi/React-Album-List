import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Home({ posts }) {
  return (
    <div className="container">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {posts.map((post) => (
          <div className="card m-2" key={post.id} style={{ width: "17rem" }}>
            <div
              className="card-body list"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Title  */}
              <h5 className="card-title">{post.title}</h5>
              <div className="row">
                {/* Update post button */}
                {/* Delete post button */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
