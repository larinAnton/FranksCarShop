import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CarsGrid from './CarsGrid';
import { Car } from '../../store/carStore';

const renderCarsGrid = (
    cars: Car[],
    onView = () => {},
    onAddToCart = () => {},
    onRemoveFromCart = () => {},
    selectedCarIds: number[] = []) => {
    return render(<CarsGrid
        cars={cars}
        onView={onView}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        selectedCarIds={selectedCarIds}
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

    it('cart buttons should not be visible if car in not licensed', () => {
        const { queryByText } = renderCarsGrid([getFakeCar(1, false)]);

        const addButton = queryByText('Add to cart');
        expect(addButton).toBeNull();

        const removeButton = queryByText('Remove from cart');
        expect(removeButton).toBeNull();
    });

    it('should call onAddToCart if add to cart button is clicked', () => {
        const onAddToCart = jest.fn();
        const car = getFakeCar(1);
        const { getByText } = renderCarsGrid([car], () => {}, onAddToCart);

        const viewButton = getByText('Add to cart');
        fireEvent.click(viewButton);
        expect(onAddToCart).toBeCalledWith(car);
    });

    it('should call onRemoveFromCart if remove button is clicked', () => {
        const onRemoveFromCart = jest.fn();
        const car = getFakeCar(1);
        const { getByText } = renderCarsGrid(
            [car],
            () => {},
            () => {},
            onRemoveFromCart,
            [1]);

        const button = getByText('Remove from cart');
        fireEvent.click(button);
        expect(onRemoveFromCart).toBeCalledWith(car);
    });
});