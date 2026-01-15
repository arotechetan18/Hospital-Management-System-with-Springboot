package com.Hospital_Management_System.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hospital_Management_System.entity.Patient;
import com.Hospital_Management_System.repository.PatientRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PatientController {

	@Autowired
	private PatientRepository patientRepository;

	public PatientController(PatientRepository patientRepository) {
		super();
		
	}
	
	@PostMapping("/patients")
	public Patient createPatient(@RequestBody Patient patient) {
		patient.setId(null);
		return patientRepository.save(patient);
		
	}
	
	
	@GetMapping("/patients")
	public List<Patient>getAllPatient(){
		
		return patientRepository.findAll();
	}
	
	@GetMapping("/patients/{id}")
	public ResponseEntity<Patient>getPatientById(@PathVariable long id) throws AttributeNotFoundException{
		Patient patient=patientRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Patient Not Found with Id"));
		
		return ResponseEntity.ok(patient);
	}
	
	
	
	
	@DeleteMapping("patients/{id}")
	public ResponseEntity<Map<String,Boolean>>deletePatient(@PathVariable long id) throws AttributeNotFoundException{
		
    Patient patient= patientRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Patient not found with id"));

      patientRepository.delete(patient);

     Map<String,Boolean> response=new HashMap<String, Boolean>();
    response.put("Deleted",Boolean.TRUE);	

    return ResponseEntity.ok(response);
    }
	
	@PutMapping("patients/{id}")
	public ResponseEntity<Patient>updatePatientById(@PathVariable Long id,@RequestBody Patient patientdetails) throws AttributeNotFoundException{
		
		Patient patient= patientRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Patient not found with id"));
		
		patient.setAge(patientdetails.getAge());
		patient.setName(patientdetails.getName());
		patient.setBlood(patientdetails.getBlood());
		patient.setDose(patientdetails.getDose());
		patient.setFees(patientdetails.getFees());
		patient.setPrescription(patientdetails.getPrescription());
		patient.setUrgency(patientdetails.getUrgency());
	
		
		Patient savePatient=patientRepository.save(patient);
		
		return ResponseEntity.ok(savePatient);
	}
	

	
 
	
}
