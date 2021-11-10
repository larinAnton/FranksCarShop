import React from 'react';
import DialogTitleWithCloseButton from './DialogTitleWithCloseButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

interface ModalProps {
    title: string;
    onClose: () => void;
    open: boolean;
    children: React.ReactChild | React.ReactChild[];
    actions?: React.ReactChild | React.ReactChild[];
}

const Modal = (props: ModalProps) => {
    return (
        <Dialog
            onClose={props.onClose}
            // aria-labelledby="customized-dialog-title"
            open={props.open}
        >
            <DialogTitleWithCloseButton onClose={props.onClose}>
                {props.title}
            </DialogTitleWithCloseButton>
            <DialogContent dividers>
                {props.children}
            </DialogContent>
            {!!props.actions && <DialogActions>
                {props.actions}
            </DialogActions>}
        </Dialog>
    );
};

export default Modal;