package com.stackroute.userservice.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.userservice.services.UserServices;


@RestController
@RequestMapping(value = "/api/v1")
public class UserController {

	UserServices userservice;

	@Autowired
	public UserController(UserServices userservice) {
		this.userservice = userservice;

	}

	@RequestMapping(value = "/movies", method = RequestMethod.GET, produces = { "application/json" })
	public ResponseEntity<String> saveUserController() {
		String controllersave = userservice.saveUser();
		
		return new ResponseEntity<String>(controllersave, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/movie", method = RequestMethod.POST, produces = { "application/json" })
	public ResponseEntity<String> getUserController() {
		String controllerget = userservice.getUsers();
		
		return new ResponseEntity<String>(controllerget, HttpStatus.OK);
	}
}

