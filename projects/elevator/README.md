# zendesk-elevator

## 📝 Table of Content

- [About](#about)
- [Getting started](#getting-started)
- [How to use app](#how-to-use-app)

## About <a name = "about"></a>

Repository for the test assignment for Zendesk from Olha Afanasieva.

## Getting started <a name = "getting-started"></a>

- First clone the repo on your local machine using a terminal or a git client.
- Run 'npm install' in the terminal for installing node modules.
- Run 'npm start' to run app in the browser.
- Run 'npm test' to run tests.
- Class Elevator has two properties, that user can define creating instance of class: 
  - numberOfFloors.
  - elevatorSpeed.

## How to use app <a name = "how-to-use-app"></a>

- Rendered elevator has ordered list of buttons with numbers (each button represents a floor, amount of floors equal numberOfFloors parameter) and two additional buttons `Infinite move` and `Stop elevator`.
- When user clicks on any button with number, elevator moves through each floor to that specific floor.
- While elevator is moving, user's clicks on other numbers on the floor are blocked. (The message "elevator is moving" appears in the console). After the elevator stops at the specific floor, user can click on other floor, and the elevator will move to another floor.
- If user clicks on `Infinite move` button, elevator will move infinitely (from current position to last floor and back to first floor and so on...).
- If user clicks on `Stop elevator` button, elevator will stop both in usual and infinite mode.
