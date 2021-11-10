import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import carPlaceholder from '../resources/carPlaceholder.jpg';
import { Car } from '../index';

interface CarItemProps {
    car: Car,
    onView: (car: Car) => void,
}

const CarItem = ({ car, onView }: CarItemProps) => {
    const yearModel = new Date(car.yearModel);
    const dateAdded = new Date(car.dateAdded);
    //TODO: culture settings
    const priceFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                data-testid={`car-item-${car.id}`}
            >
                <CardMedia
                    component="img"
                    image={carPlaceholder}
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                        {car.make} {car.model}
                    </Typography>
                    <Typography>
                        made in {yearModel.getFullYear()}
                    </Typography>
                    <Typography>
                        price: {priceFormat.format(car.price)}
                    </Typography>
                    <Typography>
                        added by: {dateAdded.toLocaleDateString('en-US')}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => onView(car)} disabled={!car.licensed}>View</Button>
                    <Button size="small">Add to shopping card</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CarItem;