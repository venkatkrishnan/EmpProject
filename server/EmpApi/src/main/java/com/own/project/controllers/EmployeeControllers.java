package com.own.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.own.project.entity.Employee;
import com.own.project.service.EmployeeService;

@RestController
public class EmployeeControllers {
	
	@Autowired
	EmployeeService empService;

	@RequestMapping(value = "/employee", method = RequestMethod.POST)
	public ResponseEntity<String> register(@RequestBody final Employee employee) {
		empService.addEmployee(employee);
		return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/employee", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Employee> getEmpList() {
		return empService.getEmpList();
	}

}
