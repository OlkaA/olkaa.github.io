import React from "react";
import "./App.css";
import RenderElevator from './elevator/renderElevator';

function App() {
  return (
    
    <div className="App"> 
      <header className="App-header"> 
              Elevator
              <RenderElevator numberOfFloors={7} elevatorSpeed={1000}/>
      </header>
    </div>
  );
}

export default App;
