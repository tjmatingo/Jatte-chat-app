import api from "./components/Axios.jsx"
import { Routes, Route } from "react-router-dom";

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Navbar from "./components/Navbar.jsx"
import Chat from "./components/Chat.jsx";

function App() {
  return (
    <Navbar>
      
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
    </Navbar>
  )
} 

export default App;
