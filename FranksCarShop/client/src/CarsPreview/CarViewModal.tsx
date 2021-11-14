import React, { useEffect, useState } from 'react';
import Modal from '../common/Modal';
import { Car, Warehouse } from '../store/carStore';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import carPlaceholder from './resources/carPlaceholder.jpg';
import axios, { AxiosResponse } from 'axios';
import * as viewHelper from '../common/viewHelper';

interface CarViewModalProps {
    onClose: () => void;
    car: Car | null;
}

const CarViewModal = ({ car, onClose }: CarViewModalProps) => {
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
                made in {viewHelper.showYear(car.yearModel)}
            </Typography>
            <Typography>
                price: {viewHelper.showPrice(car.price)}
            </Typography>
            <Typography>
                added by: {viewHelper.showDateOnly(car.dateAdded)}
            </Typography>
            <Typography>
                location: {warehouse.name} {car.location}
            </Typography>
        </Modal>
    );
};

export default CarViewModal;
