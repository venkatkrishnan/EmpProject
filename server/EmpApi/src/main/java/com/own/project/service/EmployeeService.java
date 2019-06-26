package com.own.project.service;

import java.util.List;

import com.own.project.entity.Employee;

public interface EmployeeService {
	
	public void addEmployee(Employee employee);
	
	public List<Employee> getEmpList();
}
