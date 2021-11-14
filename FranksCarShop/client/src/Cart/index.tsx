import React from 'react';
import CarStore, { Car } from '../store/carStore';
import Container from '@mui/material/Container';
import CarTable from './CarTable';
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

interface CartProps {
    carStore: CarStore;
}

const Cart = ({ carStore }: CartProps) => {
    const onRemove = (car: Car) => {
        carStore.removeFromCart(car);
    };

    return (
        <Container maxWidth="lg">
            <CarTable
                cars={carStore.getCarts()}
                onRemove={onRemove}
            />
            <Grid container justifyContent="center" sx={{ pt: 4 }}>
                {!!carStore.getCarts().length && <Button
                    variant="contained"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                >
                    Make the order
                </Button>}
            </Grid>
        </Container>
    );
};

export default observer(Cart);
