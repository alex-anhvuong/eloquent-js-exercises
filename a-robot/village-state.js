import { roadGraph } from './constants.js';
import { randomPick } from './robots.js';

export default class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    //  return a state of the village (graph) if the robot decides to move to this destination
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { place: destination, address: p.address };
            }).filter(p => p.place != p.address);  //   packages which are delivered are popped from parcel list
            return new VillageState(destination, parcels);
        }
    }
}

//  Initialise a random state for the village, with
//  parcels[] = [location, destination] of parcels
//  start place/current place = 'Post Office'
VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
};