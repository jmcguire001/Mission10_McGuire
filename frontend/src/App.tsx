// IS 413 - Mission 10
// by Jacob McGuire
// Section 002, Group 3

// Import libraries
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import BowlerList from './Bowler/BowlerList';

function App() {
  return (
    <div className="App">
      {/* Call the other components */}
      <Header title="Bowling League" />
      <BowlerList />
    </div>
  );
}

// Export the App component
export default App;
