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
        }
        let action = robot(state, memory);  //  the robot decides the move => {direction, memory}
        state = state.move(action.direction);   //  the new state of village => {location, parcels[]}
        memory = action.memory; //  save the memory
        console.log(`Moved to ${action.direction}`);
    }
}

runRobot(VillageState.random(), goalOrientedRobot, []);