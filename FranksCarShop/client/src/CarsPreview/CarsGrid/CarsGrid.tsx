import React from 'react';
import Grid from '@mui/material/Grid';
import CarItem from './CarItem';
import { Car } from '../../store/carStore';

interface CarsGridProps {
    cars: Car[],
    onView: (car: Car) => void,
    onAddToCart: (car: Car) => void,
    onRemoveFromCart: (car: Car) => void,
    selectedCarIds: number[],
}

const CarsGrid = (props: CarsGridProps) => {
    return (
        <Grid container spacing={4}>
            {props.cars.map((car) => <CarItem
                key={car.id}
                car={car}
                onView={props.onView}
                onAddToCart={props.onAddToCart}
                onRemoveFromCart={props.onRemoveFromCart}
                selected={props.selectedCarIds.includes(car.id)}
                />,
            )}
        </Grid>
    );
};

export default CarsGrid;