import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CarsGrid from './CarsGrid';
import { Car } from '../index';

const renderCarsGrid = (cars: Car[], onView = () => {}) => {
    return render(<CarsGrid
        cars={cars}
        onView={onView}
    />);
};

const getFakeCar = (id: number, licensed = true): Car => {
    return {
        id,
        dateAdded: '2017-10-03',
        price: 1100.32,
        yearModel: '2000-10-03',
        model: 'model',
        licensed,
        location: 'location',
        make: 'make',
    };
};

describe('cars grid', () => {
    it('should render all items', () => {
        const { getByTestId } = renderCarsGrid([getFakeCar(1), getFakeCar(2)]);

        getByTestId('car-item-1');
        getByTestId('car-item-2');
    });

    it('should render proper text', () => {
        const { getByText } = renderCarsGrid([getFakeCar(1)]);

        getByText('make model');
        getByText('made in 2000');
        getByText('price: $1,100.32');
        getByText('added by: 10/3/2017');
    });

    it('should call onView if view button is clicked', () => {
        const onView = jest.fn();
        const car = getFakeCar(1);
        const { getByText } = renderCarsGrid([car], onView);

        const viewButton = getByText('View');
        fireEvent.click(viewButton);
        expect(onView).toBeCalledWith(car);
    });

    it('view button should be disabled if car in not licensed', () => {
        const { getByText } = renderCarsGrid([getFakeCar(1, false)]);

        const viewButton = getByText('View');
        expect(viewButton).toBeDisabled();
    });
});