import { NormalDrive } from "./strategies/NormalDrive";
import { GoodsVehicle } from "./vehicles/GoodsVehicle";

console.log("###### Strategy Design Pattern ######");

let vehicle = new GoodsVehicle(new NormalDrive());
vehicle.drive();


//Step 1//
//Creates an object of NormalDrive.
// {
//    drive: function() {
//       console.log("Driving Capability: Normal");
//    }
// }

//Step 2//
//Now this object is passed into: GoodsVehicle
//so internally : - 

// constructor(driveStrategy: DriveStrategy){
//         super(driveStrategy);
//     }

//gets called.

//here driveStrategy = NormalDrive object

//step 3//
//super(driveStrategy)//

// Calls parent constructor:

// class Vehicle {

//     constructor(driveStrategy) {
//         this.driveStrategy = driveStrategy;
//     }
// }

// So now:

// this.driveStrategy = NormalDrive object

// Meaning:

// GoodsVehicle HAS-A NormalDrive strategy

// Final Object Structure

// Now vehicle looks like:

// vehicle = GoodsVehicle {
//     driveStrategy: NormalDrive {}
// }

// Very important:

// Vehicle does not know HOW to drive.
// It delegates driving to strategy object.

////step 4 is in Vehicle.ts




// Complete Flow Visualization
// main()
//   |
//   v
// new NormalDrive()
//   |
//   v
// NormalDrive object created
//   |
//   v
// new GoodssVehicle(strategy)
//   |
//   v
// Vehicle constructor stores strategy
//   |
//   v
// vehicle.drive()
//   |
//   v
// Vehicle delegates to:
// this.driveStrategy.drive()
//   |
//   v
// NormalDrive.drive()
//   |
//   v
// "Driving Capability: Normal"