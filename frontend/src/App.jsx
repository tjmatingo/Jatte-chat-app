import api from "./components/Axios.jsx"
import { Routes, Route } from "react-router-dom";

import Home from './components/Home.jsx'
import About from './components/About.jsx'

function App() {
  return (
    <div className="content ">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Home  /> */}
    </div>
  )
} 

export default App
