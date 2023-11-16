import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ModalForm from './ModalForm';

const ModalFormContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpenModal}>Открыть модальное окно</Button>
            <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default ModalFormContainer;