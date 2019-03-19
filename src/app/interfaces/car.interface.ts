export interface CarInter {
    name: string;
    mileage: number;
    fuelTankVolume: number;
    currentFuel: number;
    otherInfo: String[];
    drive(): void;
    refuel(): void;
}