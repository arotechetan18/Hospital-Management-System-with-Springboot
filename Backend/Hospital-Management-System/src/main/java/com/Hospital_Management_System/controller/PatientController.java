package com.Hospital_Management_System.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hospital_Management_System.entity.Patient;
import com.Hospital_Management_System.repository.PatientRepository;

@RestController
@RequestMapping("/api/v1")
public class PatientController {

	@Autowired
	private PatientRepository patientRepository;

	public PatientController(PatientRepository patientRepository) {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping("/insert")
	public Patient createPatient(@RequestBody Patient patient) {
		return patientRepository.save(patient);
		
	}
	
	
	@GetMapping
	public List<Patient>getAllPatient(){
		
		return patientRepository.findAll();
	}
	
	

	
}
