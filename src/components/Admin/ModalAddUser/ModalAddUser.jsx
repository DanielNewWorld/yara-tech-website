import React, { useState } from 'react';
import styleCSS from './ModalAddUser.module.css';

const ModalAddUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ firstName: '', phone: '' });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        closeModal();
    };

    return (
        <div>
            <button className={styleCSS.menuMark} onClick={openModal}>Add client</button>

            {isModalOpen && (
                <div className={styleCSS.modalOverlay}>
                    <div className={styleCSS.modalContent}>
                        <h2>Enter new client details</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                First Name:
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                            </label>
                            <br />
                            <label>
                                Phone:
                                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                            </label>
                            <br />
                            <button type="submit">Send</button>
                        </form>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalAddUser;