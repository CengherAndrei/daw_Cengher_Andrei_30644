import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Register from "./components/Register"
import UserProfile from "./components/UserProfile"
import AgentPage from "./components/AgentPage"
import Login from "./components/Login"
import Vanzari from "./components/Vanzari"
import Inchirieri from "./components/Inchirieri"
import About from "./components/About"
import Blog from "./components/Blog"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import EditProperty from "./components/EditProperty";
import PropertyBook from "./components/PropertyBook";


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/contact"  element={<Contact/>}></Route>
          <Route path="/login"  element={<Login/>}></Route>
          <Route path="/register"  element={<Register/>}></Route>
          <Route path="/user"  element={<UserProfile/>}></Route>
          <Route path="/agent"  element={<AgentPage/>}></Route>
          <Route path="/about"  element={<About/>}></Route>
          <Route path="/vanzari"  element={<Vanzari/>}></Route>
          <Route path="/inchirieri"  element={<Inchirieri/>}></Route>
          <Route path="/blog" exact element={<Blog/>}></Route>
          <Route path="/edit/:id"  element={<EditProperty/>}></Route>
          <Route path="/property"  element={<PropertyBook/>}></Route>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
