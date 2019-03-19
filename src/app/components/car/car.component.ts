import { Component } from '@angular/core';
import { CarInter } from "../../interfaces/car.interface";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements CarInter {
  public name: string = 'Skoda';
  public mileage: number = 1000;
  public fuelTankVolume: number = 35;
  public currentFuel: number = 10;
  public otherInfo: String[] = ["Engine: 1.5", "Max speed: 180km/h", "color: silver", "Year: 2008"];


  constructor() {}

public drive(): void {
  this.mileage += 10;
  this.currentFuel -= 1;
}

public refuel():void {
  this.currentFuel += 10;
}
public onClickDriveHandler(): void {
  this.drive();
}

public onClickRefuelHandler(): void {
  this.refuel();
}
}
