import { Elevator } from "./elevator";
import React, { Component } from "react";
import "./renderElevator.css";

export default class renderElevator extends Component {
  constructor(props) {
    super(props);

    this.elevator = new Elevator(this.props.numberOfFloors, this.props.elevatorSpeed);
    this.elevator.onFloorChanged( () => this.setState({ currentPosition: this.elevator.currentPosition}) )
    
    this.state = {
      currentPosition: this.elevator.currentPosition
    };
  }

  goToFloors(floor){
    this.elevator.goToFloors(floor).catch(() => console.log('elevator is moving'));
  }

  stopElevator(){
    this.elevator.stopElevator();
  }

  render() {
    const floors = [];
    for (let floor = 0; floor < this.elevator.numberOfFloors; floor++) {
      floors.push(floor + 1);
    }

    return (
      <div className="elevator">
        <a className="floor stop" onClick={() => this.stopElevator()}>Stop elevator</a>
        <a className="floor infinite" onClick={() => this.goToFloors(this.elevator.numberOfFloors + 1)}>Infinite move</a>
          {floors.reverse().map(floor => {
          return (
            <a
              key={floor}
              onClick={() => this.goToFloors(floor)}
              className={`floor ${floor === this.state.currentPosition ? ' floor--active' : ''}`}
            >
              {floor}
            </a>
          );
        })}
      </div>
    );
  }
};