import { Elevator } from './elevator';

test('if elevator returns correct current position', () => {
    const elevator = new Elevator(10, 10);
    expect(elevator.currentPosition).toBe(elevator.getCurrentPosition());
});

test('if elevator can move to the floor', async () => {
    const elevator = new Elevator(10, 10);
    const result = await elevator.goToFloors(3);
    expect(result).toBe(3);
}); 

test('if elevator can move from the current position', async () => {
    const elevator = new Elevator(10, 10);
    const current = elevator.getCurrentPosition();
    await elevator.goToFloors(3);
    expect(elevator.getCurrentPosition()).not.toBe(current);
}); 

test('if elevator can move Down', async () => {
    const elevator = new Elevator(10, 10);
    await elevator.goToFloors(3);
    await elevator.goToFloors(2);
    expect(elevator.getCurrentPosition()).toBe(2);
});

test('if elevator can move Up', async () => {
    const elevator = new Elevator(10, 10);
    await elevator.goToFloors(3);
    await elevator.goToFloors(4);
    expect(elevator.getCurrentPosition()).toBe(4);
}) 

test('if elevator is already in use', async () => {
    const elevator = new Elevator(10, 10);
    const result = await elevator.goToFloors(3);
    expect(result).toBe(3);
});

test('if elevator can move in reverse', async () => {
    const elevator = new Elevator(10, 10);
    const floor = 11;
    elevator.goToFloors(floor);
    await setTimeout(() => expect(elevator.getCurrentPosition()).toBeLessThan(floor), 120);    
});