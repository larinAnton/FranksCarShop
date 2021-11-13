import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import carPlaceholder from '../resources/carPlaceholder.jpg';
import { Car } from '../../store/carStore';
import * as viewHelper from '../../common/viewHelper';

interface CarItemProps {
    car: Car,
    onView: (car: Car) => void,
    onAddToCart: (car: Car) => void,
    onRemoveFromCart: (car: Car) => void,
    selected: boolean,
}

const CarItem = (props: CarItemProps) => {
    const renderCartButton = () => {
        if (!props.car.licensed) {
            return null;
        }

        if (!props.selected) {
            return (
                <Button
                    size="small"
                    onClick={() => props.onAddToCart(props.car)}
                >
                    Add to cart
                </Button>);
        } else {
            return (
                <Button
                    size="small"
                    onClick={() => props.onRemoveFromCart(props.car)}
                    disabled={!props.car.licensed}
                    color="error"
                >
                    Remove from cart
                </Button>);
        }
    };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                data-testid={`car-item-${props.car.id}`}
            >
                <CardMedia
                    component="img"
                    image={carPlaceholder}
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                        {props.car.make} {props.car.model}
                    </Typography>
                    <Typography>
                        made in {viewHelper.showYear(props.car.yearModel)}
                    </Typography>
                    <Typography>
                        price: {viewHelper.showPrice(props.car.price)}
                    </Typography>
                    <Typography>
                        added by: {viewHelper.showDateOnly(props.car.dateAdded)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={() => props.onView(props.car)}
                    >
                        View
                    </Button>
                    {renderCartButton()}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CarItem;