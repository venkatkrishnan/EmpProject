package com.own.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.own.project.entity.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long>{

	@Query("SELECT e FROM Employee e ORDER BY e.firstName")
	    List<Employee> getEmployeeList();
}
