// Package Imports
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// file imports
import Navbar from "./Navbar";
import { Home, AddAlbum, UpdateAlbum, FoF } from "../pages";
import { getPosts, addPost, updateAlbumApiCall, deleteAlbumCall } from "../Api";

function App() {
  // Our app will maintain the posts and albm state
  const [posts, setPosts] = useState([]);
  const [album, setAlbum] = useState({});

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
    await addPost(userId, title);
    const newPosts = {
      userId: userId,
      id: lastId + 1, // using this as an key
      title: title,
    };
    const allPosts = [newPosts, ...posts];
    setPosts(allPosts);
  };

  const setUpdateAlbum = (post) => {
    setAlbum(post);
  };
  const updateAlbum = async (id, userId, title, album) => {
    const index = posts.indexOf(album);
    let updatedAlbum = await updateAlbumApiCall(userId, id, title);
    // dummy update
    updatedAlbum = {
      userId,
      id,
      title,
    };
    posts[index] = updatedAlbum;
    setUpdateAlbum(posts[index]);
  };

  const deleteAlbumFromList = (id) => {
    deleteAlbumCall(id);
    // dummy delete
    const newAlbum = posts.filter((post) => post.id !== id);
    setPosts(newAlbum);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              posts={posts}
              deleteAlbum={deleteAlbumFromList}
              setUpdateAlbum={setUpdateAlbum}
            />
          }
        />
        <Route
          path="/add-album"
          element={<AddAlbum addAlbum={addAlbumToList} />}
        />
        <Route
          path="/update-album"
          element={
            <UpdateAlbum
              posts={posts}
              updateAlbum={updateAlbum}
              album={album}
            />
          }
        />
        <Route path="*" element={<FoF />} />
      </Routes>
    </div>
  );
}

export default App;
