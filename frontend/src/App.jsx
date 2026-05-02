import api from "./components/Axios.jsx"
import { Routes, Route } from "react-router-dom";

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <Navbar >
      content = {
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      }
    </Navbar >
  )
} 

export default App;
