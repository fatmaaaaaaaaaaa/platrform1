import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginparent from './LoginParent/Loginparent'
import Loginteacher from './LoginTeacher/Loginteacher'
import WhoAreYou from './WhoAreYou/WhoAreYou'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WhoAreYou />} />
          <Route path="/Loginteacher" element={<Loginteacher />} />
          <Route path="/Loginparent" element={<Loginparent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
