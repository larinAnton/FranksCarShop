import { makeAutoObservable } from 'mobx';

export interface Car {
    id: number;
    make: string;
    model: string;
    yearModel: string;
    price: number;
    licensed: boolean;
    dateAdded: string;
    location: string;
}

export interface Warehouse {
    id: number;
    name: number;
    location: GeographicLocation;
}

interface GeographicLocation {
    latitude: number,
    longitude: number,
}

class CarStore {
    private carsInCart: Car[] = [];
    
    constructor() {
        makeAutoObservable(this);
    }
    
    public addToCart = (newCar: Car) => {
        if (!this.carsInCart.some((car) => car.id == newCar.id)) {
            this.carsInCart.push(newCar);
        }
    }

    public removeFromCart = (carToRemove: Car) => {
        this.carsInCart = this.carsInCart.filter((car) => car.id != carToRemove.id);
    }

    public getCarts() {
        return this.carsInCart;
    }
}

export default CarStore;