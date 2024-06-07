package com.ebooklib.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ebooklib.bookstore.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
