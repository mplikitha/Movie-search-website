package com.stackroute.userservice.services;

import org.springframework.stereotype.Service;

@Service
public class UserServicesImpl implements UserServices {

	@Override
	public String saveUser() {
		String savetest = "saved user";
		return savetest;

	}

	@Override
	public String getUsers() {
		// TODO Auto-generated method stub
		String gettest = "got user";
		return gettest;

	}
}