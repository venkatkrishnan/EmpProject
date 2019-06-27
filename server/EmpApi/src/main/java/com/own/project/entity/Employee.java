package com.own.project.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "employee")
public class Employee implements Serializable {
	
	private static final long serialVersionUID = 3759153117116806783L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
	
	@Column(name = "firstName", nullable = false)
	private String firstName;
	
	@Column(name = "lastName", nullable = false)
	private String lastName;
	
	@Column(name = "gender", nullable = false)
	private String gender;
	
	@Column(name = "dob", nullable = false)
	private String dob;
	
	@Column(name = "department", nullable = false)
	private String department;
	
}
