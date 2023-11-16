import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const ModalForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        // Здесь вы можете добавить поля формы
        name: '',
        email: '',
        // ...
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Ваша логика отправки данных
        console.log('Отправленные данные:', formData);
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Отправить данные</DialogTitle>
            <DialogContent>
                <Field
                    fullWidth
                    label="Имя"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    margin="normal"
                    validate={[required, maxLengthCreator(40)]}
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    margin="normal"
                />
                {/* Добавьте другие поля формы по необходимости */}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Отмена</Button>
                <Button onClick={handleSubmit}>Отправить</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalForm;