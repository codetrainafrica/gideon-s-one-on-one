import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import AllBoxes from './component/AllBoxes';
function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <AllBoxes />
    </div>
  );
}

export default App;
