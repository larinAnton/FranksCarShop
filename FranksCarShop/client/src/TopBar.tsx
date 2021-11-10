import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import * as React from 'react';

const TopBar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <ShoppingCartIcon sx={{ mr: 2}} />
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;