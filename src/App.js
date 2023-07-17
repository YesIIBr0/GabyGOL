import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './Home';
import LastNews from './Lastnew';
import NewGames from './NewGames';
import Featured from './Featured';
import Contact from './Contact';
import LogInSignUp from './LogInSignUp';


function App() {
  return (
    <Router>
     <div>
        <header>
          <div className="navigation-container container">
            <div className="top-head">
              <div className="web-name">
                <h1>DIK'SRIZZ</h1>
              </div>
              <div className="ham-btn">
                <span>
                  <i className="fas fa-bars"></i>
                </span>
              </div>
              <div className="times-btn">
                <span>
                  <i className="fas fa-times"></i>
                </span>
              </div>
            </div>
            <div className="nav-bar" id="nav-bar">
              <nav>
                <ul>
                  <li>
                    
                    <Link to="/" className="btn-12">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/lastnews" className="btn-12">
                      Lastest News
                    </Link>
                  </li>
                  <li>
                    <Link to="/newgames" className="btn-12">
                      New Games
                    </Link>
                  </li>
                  <li>
                    <Link to="/featured" className="btn-12">
                      Featured
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="btn-12">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="btn-12">
                      LogIn/SignUp
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="social-icons">
              <ul>
                <li>
                  <a href="#" className="btn-12">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-12">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-12">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-12">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/Lastnews" element={<LastNews/>} />
            <Route path="/newgames" element={<NewGames/>} />
            <Route path="/featured" element={<Featured/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<LogInSignUp/>} />
          </Routes>
        
      </div>
      </Router>
  );
}

export default App;
