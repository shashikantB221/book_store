package com.ebooklib.bookstore.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class Hi {

	@RequestMapping("/")
	 public String sayHi() 
	    {
	    	return  "Jay shri RAM";
	    }
}
