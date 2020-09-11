import VillageState from './village-state.js';
import { randomRobot, routeRobot, goalOrientedRobot } from './robots.js';

//  Give our village a 'state',
//  The robot runs its 'robot' function to make decision (create action)
//  The action is based either on randomness, memory, or pathfinding mechanism 
function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
            // return turn;
        }
        let action = robot(state, memory);  //  the robot decides the move => {direction, memory}
        console.log(`Moved to ${action.direction}`);
        state = state.move(action.direction);   //  the new state of village => {location, parcels[]}
        memory = action.memory; //  save the memory
    }
}

function compareRobots(robot1, mem1, robot2, mem2) {
    let count = [0, 0];
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        count[0] += runRobot(state, robot1, mem1);
        count[1] += runRobot(state, robot2, mem2);
        // console.log(count);
    }
    count = count.map(v => Math.round(v / 100));
    console.log(`${robot1.name} took ${count[0]} turns in average`);
    console.log(`${robot2.name} took ${count[1]} turns in average`);
}

runRobot(VillageState.random(), goalOrientedRobot, []);
// compareRobots(routeRobot, [], goalOrientedRobot, []);