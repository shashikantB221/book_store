import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditBook = ({ id }) => {
  const [book, setBook] = useState({});
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    // Add more fields as needed
  });

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`/api/books/${id}`);
      setBook(response.data);
      setFormData({
        title: response.data.title,
        author: response.data.author,
        // Set other form fields here
      });
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/books/${id}`, formData);
      // Redirect or navigate back to the ShowBooks component
      // Implement navigation logic here
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div>
      <h1>Edit Book</h1>
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
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
