import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginparent from './LoginParent/Loginparent'
import Loginteacher from './LoginTeacher/Loginteacher'
import WhoAreYou from './WhoAreYou/WhoAreYou'
import LandingPage from './LandingPqge/Body';
import Header from './LandingPqge/Header';
function App() {

  return (
    <>
      <Router>
        <div className="app-container">
          <Header />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/WhoAreYou" element={<WhoAreYou />} />
              <Route path="/Loginteacher" element={<Loginteacher />} />
              <Route path="/Loginparent" element={<Loginparent />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
