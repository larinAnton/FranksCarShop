import React from 'react';
import IconButton from '@mui/material/IconButton';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import { useNavigate } from 'react-router-dom';

const CarsPreviewNavigation = () => {
    const navigate = useNavigate();
    
    return (
        <IconButton
            onClick={() => navigate('/')}
            sx={{ color: (theme) => theme.palette.grey[50] }}
        >
            <DirectionsCar
                sx={{ mr: 2 }}
                color="inherit"
            />
        </IconButton>
    );
};

export default CarsPreviewNavigation;
