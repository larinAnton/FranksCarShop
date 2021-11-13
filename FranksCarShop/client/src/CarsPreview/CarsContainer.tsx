import React from 'react';
import Container from '@mui/material/Container';

interface CarsContainerProps {
    children: React.ReactChild | React.ReactChild[]
}

const CarsContainer = (props: CarsContainerProps) => {
    return (
        <Container maxWidth="lg">
            {props.children}
        </Container>
    );
};

export default CarsContainer;