import React, {useEffect, useState} from 'react';
import CarsContainer from './CarsContainer';
import CarsGrid from './CarsGrid/CarsGrid';
import axios, {AxiosResponse} from 'axios';
import CarViewModal from './CarViewModal';

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

const CarsModule = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [carToView, setCarToView] = useState<Car | null>(null);

    useEffect(() => {
        axios.get('warehouse/cars').then((response: AxiosResponse<Car[]>) => {
            setCars(response.data);
        });
    }, []);

    const openCarViewModal = (car: Car) => {
        setCarToView(car);
    };

    const closeCarViewModal = () => {
        setCarToView(null);
    };

    return (
        <CarsContainer>
            <CarViewModal
                car={carToView}
                onClose={closeCarViewModal}
            />
            <CarsGrid cars={cars} onView={openCarViewModal}/>
        </CarsContainer>
    );
};

export default CarsModule;