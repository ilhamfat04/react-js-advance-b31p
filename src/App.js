import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// import "pages" component here
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'

function App() {
  return (
    // define <BrowserRouter> as parent element
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/profile" >Profile</Link>
            </li>
            <li>
              <Link to="/signin" >Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* code <Routes> and <Route> below, according to path and component */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;