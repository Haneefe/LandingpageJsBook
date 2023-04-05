import React from 'react'
import Left from "./Left"
import Right from "./Right"
import img from "./assets/Cover page.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='imgcontainer'>
      <img src={img}  className='bookimg'/>
      </div>
        
   <Left/>
   <Right/>
    </div>
  );
}

export default App;
