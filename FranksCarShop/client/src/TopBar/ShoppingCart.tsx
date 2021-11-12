import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import CarStore from '../store/carStore';
import Badge from '@mui/material/Badge';
import { observer } from 'mobx-react';

interface ShoppingCartProps {
    carStore: CarStore;
}

const ShoppingCart = ({ carStore }: ShoppingCartProps) => {
    return (
        <Toolbar>
            <Badge badgeContent={carStore.getCarts().length} color="secondary">
                <ShoppingCartIcon sx={{ mr: 2}} />
            </Badge>
        </Toolbar>
    );
};

export default observer(ShoppingCart);
