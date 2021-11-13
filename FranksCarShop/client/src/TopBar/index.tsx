import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import CarStore from '../store/carStore';
import ShoppingCart from './CartNavigation';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import CarsPreviewNavigation from './CarsPreviewNavigation';

interface TopBarProps {
    carStore: CarStore;
}

const TopBar = ({ carStore }: TopBarProps) => {
    return (
        <Container sx={{ pb: 12 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <ShoppingCart carStore={carStore} />
                    <CarsPreviewNavigation/>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default TopBar;