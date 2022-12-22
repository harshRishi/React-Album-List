// Package Imports
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// file imports
import Navbar from "./Navbar";
import { Home, AddAlbum, UpdateAlbum, FoF } from "../pages";

import { getPosts, addPost } from "../Api";

function App() {
  // Our app will maintain the posts and albm state
  const [posts, setPosts] = useState([]);
  // const [album, setAlbum] = useState({});

  // using useEffect we'll fetch the data from the API
  const fetchData = async () => {
    const data = await getPosts();
    setPosts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // functions
  const addAlbumToList = async (userId, title) => {
    const length = posts.length;
    const lastId = posts[length - 1].id;
    await addPost(userId, lastId, title);
    const newPosts = {
      userId: userId,
      id: lastId + 1,
      title: title,
    };
    const allPosts = [newPosts, ...posts];
    setPosts(allPosts);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route
          path="/add-album"
          element={<AddAlbum addAlbum={addAlbumToList} />}
        />
        <Route path="/update-album" element={<UpdateAlbum />} />
        <Route path="*" element={<FoF />} />
      </Routes>
    </div>
  );
}

export default App;
