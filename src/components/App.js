import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import AddAlbum from "./AddAlbum";
import UpdateAlbum from "./UpdateAlbum";
import FoF from "./FoF";

function App() {
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
