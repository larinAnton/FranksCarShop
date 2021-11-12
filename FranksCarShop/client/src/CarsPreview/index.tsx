import React, {useEffect, useState} from 'react';
import CarsContainer from './CarsContainer';
import CarsGrid from './CarsGrid/CarsGrid';
import axios, {AxiosResponse} from 'axios';
import CarViewModal from './CarViewModal';
import CarStore, { Car } from '../store/carStore';
import { observer } from 'mobx-react';

interface Store {
    carStore: CarStore;
}

const CarsModule = ({ carStore }: Store) => {
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

    const onAddToCart = (car: Car) => {
        carStore.addToCart(car);
    };

    const onRemoveFromCart = (car: Car) => {
        carStore.removeFromCart(car);
    };

    return (
        <CarsContainer>
            <CarViewModal
                car={carToView}
                onClose={closeCarViewModal}
            />
            <CarsGrid
                cars={cars}
                onView={openCarViewModal}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
                selectedCarIds={carStore.getCarts().map((car) => car.id)}
            />
        </CarsContainer>
    );
};

export default observer(CarsModule);