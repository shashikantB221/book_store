import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ShowBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleEdit = (id) => {
    // Navigate to EditBook component with the selected book ID
    // history.push(`/edit/${id}`);
    return <Link to={`/edit/${id}`}></Link>;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/books/${id}`);
      // If the delete request is successful, update the books state to remove the deleted book
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => handleEdit(book.id)}>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBooks;
