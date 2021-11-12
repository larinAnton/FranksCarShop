import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import CarStore from '../store/carStore';
import ShoppingCart from './ShoppingCart';

interface TopBarProps {
    carStore: CarStore;
}

const TopBar = ({ carStore }: TopBarProps) => {
    return (
        <AppBar position="fixed">
            <ShoppingCart carStore={carStore} />
        </AppBar>
    );
};

export default TopBar;