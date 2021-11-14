import React, {useEffect, useState} from 'react';
import CarsContainer from './CarsContainer';
import CarsGrid from './CarsGrid/CarsGrid';
import axios, {AxiosResponse} from 'axios';
import CarViewModal from './CarViewModal';
import CarStore, { Car } from '../store/carStore';
import { observer } from 'mobx-react';
import useInfiniteScroll from '../common/hooks/useInfiniteScroll';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

interface Store {
    carStore: CarStore;
}

const CarsModule = ({ carStore }: Store) => {
    const [cars, setCars] = useState<Car[]>([]);
    const [carToView, setCarToView] = useState<Car | null>(null);
    const [allLoaded, setAllLoaded] = useState(false);

    const fetchData = (page: number) => {
        axios.get('warehouse/cars', {
            params: {
                take: 10,
                page,
            },
        }).then((response: AxiosResponse<Car[]>) => {
            if (response.data.length) {
                setCars((cars) => [...cars, ...response.data]);
            } else {
                setAllLoaded(true);
            }

        });
    };

    const { ref } = useInfiniteScroll({fetchData});

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
            {!allLoaded && <Grid container justifyContent="center">
                <CircularProgress ref={ref}/>
            </Grid>}
        </CarsContainer>
    );
};

export default observer(CarsModule);