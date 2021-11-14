import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CarStore from '../store/carStore';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

interface ShoppingCartProps {
    carStore: CarStore;
}

const CartNavigation = ({ carStore }: ShoppingCartProps) => {
    const navigate = useNavigate();

    return (
        <IconButton
            onClick={() => navigate('/cart')}
            sx={{ color: (theme) => theme.palette.grey[50] }}
            disabled={!carStore.getCarts().length}
        >
            <Badge badgeContent={carStore.getCarts().length} color="secondary">
                <ShoppingCartIcon
                    sx={{ mr: 2 }}
                    color="inherit"
                />
            </Badge>
        </IconButton>
    );
};

export default observer(CartNavigation);
