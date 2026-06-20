import { DriveStrategy } from "./DriveStrategy";

// Concrete strategy for normal drive mode
export class NormalDrive implements DriveStrategy{
    drive(): void{
        console.log('Driving Capability: Normal"')
    }
}