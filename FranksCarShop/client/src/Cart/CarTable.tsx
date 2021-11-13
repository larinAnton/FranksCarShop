import React from 'react';
import { Car } from '../store/carStore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import * as viewHelper from '../common/viewHelper';
import CloseIcon from '@mui/icons-material/Close';


interface ComponentProps {
    cars: Car[];
    onRemove: (car: Car) => void;
}

const CarTable = (props: ComponentProps) => {
    const total = props.cars.reduce((sum , car) => sum += car.price, 0);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>Year Made</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell/>
                </TableHead>
                <TableBody>
                    {props.cars.map((car) => (
                        <TableRow key={car.id}>
                            <TableCell>{car.make} {car.model}</TableCell>
                            <TableCell>{viewHelper.showYear(car.yearModel)}</TableCell>
                            <TableCell>{viewHelper.showPrice(car.price)}</TableCell>
                            <TableCell>
                                <IconButton
                                    onClick={() => props.onRemove(car)}
                                    sx={{ color: (theme) => theme.palette.grey[500] }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell/>
                        <TableCell/>
                        <TableCell>Total: {viewHelper.showPrice(total)}</TableCell>
                        <TableCell/>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CarTable;
