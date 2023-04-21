package com.inventory.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Employee{


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long userId;

	String userName;
	String email;
	String phone;
	String password;


	@ManyToOne(cascade = CascadeType.ALL)
	Roles role;

	public Employee() {

	}

	public Employee(long userId, String userName, String email, String phone, String password, Roles role) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.role = role;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Roles getRole() {
		return role;
	}

	public void setRole(Roles role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Employee [userId=" + userId + ", userName=" + userName + ", email=" + email + ", phone=" + phone
				+ ", password=" + password + ", role=" + role + "]";
	}


}
