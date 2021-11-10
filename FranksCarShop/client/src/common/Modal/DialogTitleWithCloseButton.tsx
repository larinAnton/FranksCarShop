import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
    onClose: () => void;
    children: React.ReactChild
}

const DialogTitleWithCloseButton = ({ onClose, children }: ModalProps) => {
    return (
        <DialogTitle sx={{ m: 0, p: 2 }}>
            {children}
            <IconButton
                data-testid="icon-close-button"
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
        </DialogTitle>
    );
};

export default DialogTitleWithCloseButton;
