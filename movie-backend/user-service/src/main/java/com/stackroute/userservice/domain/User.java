package com.stackroute.userservice.domain;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
//@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@Id
	private int userId;
	private String userName;

}
