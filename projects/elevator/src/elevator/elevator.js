export class Elevator {
  constructor(numberOfFloors, elevatorSpeed) {
    this.numberOfFloors = numberOfFloors;
    this.elevatorSpeed = elevatorSpeed;

    this.currentPosition = 1;
    this.floorChangedEventHandlers = [];
    this.isElevatorWorking = false;
    this.timeoutInstance = null;
  }

  onFloorChanged(handler) {
    this.floorChangedEventHandlers.push(handler);
  }

  getCurrentPosition() {
    return this.currentPosition;
  }

  stopElevator() {
    this.isElevatorWorking = false;
    if(this.timeoutInstance){
      clearTimeout(this.timeoutInstance);
    }
  }

  goToFloors(floor) {
    if( this.isElevatorWorking  ) {
      return Promise.reject();
    }

    this.isElevatorWorking = true;

    return new Promise((resolve, reject) => {
        this.moveElevator(floor, resolve); 
      })
  }

  moveElevator(floor, callback) {
    if(!this.isElevatorWorking){
      return
    }
    const self = this;
      if (self.currentPosition === floor) {
        self.isElevatorWorking = false;
        callback(self.currentPosition);
      } else {
        this.timeoutInstance = setTimeout(() => {
          if (self.currentPosition < floor) {
            if (self.currentPosition < this.numberOfFloors){
              self.currentPosition = self.currentPosition + 1;
            } else {
              self.currentPosition = self.currentPosition -1;
              floor = floor * -1;
            }
          } else {
            if (self.currentPosition > 1 ){
              self.currentPosition = self.currentPosition - 1;
            } else {
              self.currentPosition = self.currentPosition + 1;
              floor = floor * -1;
            }
          }
          self.floorChangedEventHandlers.forEach(handler => {
            handler(self.currentPosition);
          });
          self.moveElevator(floor, callback);
        }, self.elevatorSpeed);
      }
  }
}