import { roadGraph } from './constants.js';
import { randomPick } from './robots.js';

export default class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    //  return a state of the village (graph) if the robot decides to move to this destination
    //  also drop off packages that its destionation is here
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                //  carry along any package that needs to be delivered
                return { place: destination, address: p.address };
            }).filter(p => {
                if (p.place != p.address) return true;
                console.log('Drop off package');
                return false;
            });  //   packages which are delivered are popped from parcel list
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
    console.log(parcels);
    return new VillageState("Post Office", parcels);
};