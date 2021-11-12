import React, {useEffect, useState} from 'react';
import Modal from '../common/Modal';
import { Car, Warehouse } from '../store/carStore';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import carPlaceholder from './resources/carPlaceholder.jpg';
import axios, { AxiosResponse } from 'axios';

interface CarViewModalProps {
    onClose: () => void;
    car: Car | null;
}

const CarViewModal = ({car, onClose}: CarViewModalProps) => {
    const [warehouse, setWarehouse] = useState<Warehouse | null>(null);

    useEffect(() => {
        if (!car) {
            setWarehouse(null);
        } else {
            axios.get('/warehouse/warehouseInfo', {
                params: {
                    carId: car.id,
                },
            }).then((response: AxiosResponse<Warehouse>) => {
                setWarehouse(response.data);
            });
        }

    }, [car]);

    //TODO loading
    if(!car || !warehouse) {
        return null;
    }

    //TODO move to helper
    const yearModel = new Date(car.yearModel);
    const dateAdded = new Date(car.dateAdded);
    //TODO: culture settings
    const priceFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    return (
        <Modal
            title={`${car.make} ${car.model}`}
            onClose={onClose}
            open={!!car}
        >
            <CardMedia
                component="img"
                image={carPlaceholder}
                alt="random"
            />
            <Typography>
                made in {yearModel.getFullYear()}
            </Typography>
            <Typography>
                price: {priceFormat.format(car.price)}
            </Typography>
            <Typography>
                added by: {dateAdded.toLocaleDateString('en-US')}
            </Typography>
            <Typography>
                location: {warehouse.name} {car.location}
            </Typography>
        </Modal>
    );
};

export default CarViewModal;
