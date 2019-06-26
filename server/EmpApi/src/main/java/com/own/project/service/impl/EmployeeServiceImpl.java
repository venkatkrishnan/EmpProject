package com.own.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.own.project.entity.Employee;
import com.own.project.repositories.EmployeeRepository;
import com.own.project.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	EmployeeRepository empRepo;
	
	@Override
	public void addEmployee(Employee employee) {
		empRepo.save(employee);
	}

	@Override
	public List<Employee> getEmpList() {
		return empRepo.getEmployeeList();
	}

}
