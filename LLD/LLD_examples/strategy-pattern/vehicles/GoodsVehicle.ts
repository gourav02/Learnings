import { DriveStrategy } from "../strategies/DriveStrategy";
import { Vehicle } from "./Vehicle";

//Concrete context subclass
export class GoodsVehicle extends Vehicle {

    constructor(driveStrategy: DriveStrategy){
        super(driveStrategy);
    }
}