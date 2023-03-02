
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Header } from './components/Header/Header';
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
        <Route path= "/" element={<Home />} />
          <Route path="/home" element={<Home/>}>
          </Route>
          <Route path="/about-me" element={<AboutMe/>}>
          </Route>
          <Route path="/skills" element={<Skills/>}>
          </Route>
          <Route path="/projects" element={<Projects/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>
          <Route path= "*" element={<Navigate to="/"/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
