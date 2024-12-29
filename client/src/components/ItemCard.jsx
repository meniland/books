import React, { useState } from 'react';
import '../styles/ItemCard.css';

const ItemCard = ({ book, fromUserItems, onUpdate }) => {
        const [isEditing, setIsEditing] = useState(false);
        const [formData, setFormData] = useState({
                name: book.name,
                category: book.category,
                description: book.description,
                photoPath: book.photoPath,
        });

        const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData((prev) => ({ ...prev, [name]: value }));
        };

        const handlePhotoChange = (e) => {
                const file = e.target.files[0];
                setFormData((prev) => ({ ...prev, photoPath: file }));
        };

        const handleUpdate = async () => {
                const updatedData = new FormData();
                updatedData.append('name', formData.name);
                updatedData.append('category', formData.category);
                updatedData.append('description', formData.description);
                if (formData.photoPath instanceof File) {
                        updatedData.append('photo', formData.photoPath);
                }

                try {
                        await onUpdate(updatedData); // Call the update function passed as a prop
                        setIsEditing(false);
                } catch (error) {
                        console.error('Failed to update item:', error);
                }
        };

        return (
            <div className='item-card'>
                    {isEditing ? (
                        <>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder='Name'
                                />
                                <input
                                    type='text'
                                    name='category'
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    placeholder='Category'
                                />
                                <textarea
                                    name='description'
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder='Description'
                                />
                                <div>
                                        <input
                                            type='file'
                                            accept='image/*'
                                            onChange={handlePhotoChange}
                                        />
                                        {formData.photoPath && !(formData.photoPath instanceof File) && (
                                            <img
                                                src={process.env.REACT_APP_API_DOMAIN + `/uploads/${formData.photoPath.split('/').pop()}`}
                                                alt={book.name}
                                                style={{ maxWidth: '100px', maxHeight: '100px' }}
                                            />
                                        )}
                                </div>
                                <button onClick={handleUpdate}>Update</button>
                                <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </>
                    ) : (
                        <>
                                <h3>{book.name}</h3>
                                <p><strong>Category:</strong> {book.category}</p>
                                <p>{book.description}</p>
                                <div>
                                        {book.photoPath && (
                                            <img
                                                src={process.env.REACT_APP_API_DOMAIN + `/uploads/${book.photoPath.split('/').pop()}`}
                                                alt={book.name}
                                                style={{ maxWidth: '100px', maxHeight: '100px' }}
                                            />
                                        )}
                                </div>
                                {fromUserItems && (
                                    <button onClick={() => setIsEditing(true)}>Edit Details</button>
                                )}
                        </>
                    )}
            </div>
        );
};

export default ItemCard;
