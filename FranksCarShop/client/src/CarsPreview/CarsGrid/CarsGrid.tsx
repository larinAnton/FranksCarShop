import React from 'react';
import Grid from '@mui/material/Grid';
import CarItem from './CarItem';
import { Car } from '../index';

interface CarsGridProps {
    cars: Car[],
    onView: (car: Car) => void
}

const CarsGrid = (props: CarsGridProps) => {
    return (
        <Grid container spacing={4}>
            {props.cars.map((car) => <CarItem
                key={car.id}
                car={car}
                onView={props.onView}
                />,
            )}
        </Grid>
    );
};

export default CarsGrid;