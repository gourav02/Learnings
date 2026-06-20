// Context class - holds a reference to a strategy object
import { DriveStrategy } from "../strategies/DriveStrategy";

export class Vehicle {
    protected driveStrategy: DriveStrategy;

    constructor(driveStrategy: DriveStrategy){
        this.driveStrategy = driveStrategy;
    }

    drive() : void {
        console.log(`\n${this.constructor.name}:`);
        this.driveStrategy.drive();
    }
}


// Step 4//
// vehicle.drive()

// Calls:

// drive() {
//     console.log(`${this.constructor.name}:`);
//     this.driveStrategy.drive();
// }


// Step 5//
// this.constructor.name

// Inside object:

// this = GoodsVehicle

// So:

// this.constructor.name

// becomes:

// "GoodsVehicle"

// Printed:

// GoodsVehicle:


// Step 6 //
// this.driveStrategy.drive()

// Remember:

// this.driveStrategy = NormalDrive object

// So this becomes:

// NormalDrive.drive()

// which prints:
 
// Driving Capability: Normal