import Home from "./routes/Home";
import About from "./routes/About";
import Skill from "./routes/Skill";
import Work from "./routes/Work";
import Contact from "./routes/Contact";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <Routes>
    < Route path='/' element={ < Home />}   />
    < Route path='/About' element={ < About />}   />
    < Route path='/Skill' element={ < Skill />}   />
    < Route path='/Work' element={ < Work />}   />
    < Route path='/Contact' element={ < Contact />}   />
</Routes>

  );
}

export default App;
