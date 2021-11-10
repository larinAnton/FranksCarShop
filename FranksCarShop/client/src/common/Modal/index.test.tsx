import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Modal from '.';

const renderModal = (onClose = () => {}) => {
    return render(
        <Modal
            onClose={onClose}
            open={true}
            title="title"
            actions="actions"
        >
            modal text
        </Modal>);
};

describe('modal', () => {
    it('should render proper text', () => {
        const { getByText } = renderModal();

        getByText('title');
        getByText('modal text');
        getByText('actions');
    });

    it('should call onClose if close button is clicked', () => {
        const onClose = jest.fn();
        const { getByTestId } = renderModal(onClose);

        const viewButton = getByTestId('icon-close-button');
        fireEvent.click(viewButton);
        expect(onClose).toBeCalled();
    });
});