import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/books', formData);
      // Redirect or navigate back to the ShowBooks component
      // Implement navigation logic here
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        {/* Add more input fields as needed */}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
