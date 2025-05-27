import React from 'react';
import './App.css';
import RubiksCube from './components/RubiksCube/RubiksCube';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> Virtual Rubik's Cube
            </div>
          </div>
        </div>
      </nav>

      <main style={{ marginTop: '64px' }}>
        <RubiksCube />
      </main>
    </div>
  );
}

export default App;
