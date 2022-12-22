// Package Imports
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// file imports
import Navbar from "./Navbar";
// Pages
import Home from "../pages/Home";
import AddAlbum from "../pages/AddAlbum";
import UpdateAlbum from "../pages/UpdateAlbum";
import FoF from "../pages/FoF";
// URL to fetch data from the API
import { API_URLS } from "../utils/constants";

function App() {
  // Our app will maintain the posts and albm state
  const [posts, setPosts] = useState([]);
  const [album, setAlbum] = useState({});

  // using useEffect we'll fetch the data from the API
  const fetchData = async () => {
    const url = API_URLS.getURL();
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(posts);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-album" element={<AddAlbum />} />
        <Route path="/update-album" element={<UpdateAlbum />} />
        <Route path="*" element={<FoF />} />
      </Routes>
    </div>
  );
}

export default App;
