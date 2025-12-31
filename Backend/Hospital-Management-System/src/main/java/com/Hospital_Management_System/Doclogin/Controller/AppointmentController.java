package com.Hospital_Management_System.Doclogin.Controller;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hospital_Management_System.Doclogin.entity.Appointment;
import com.Hospital_Management_System.Doclogin.repository.AppointmentRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class AppointmentController {
	
	@Autowired
	private AppointmentRepository appointmentRepository;

	public AppointmentController(AppointmentRepository appointmentRepository) {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping("/appointments")
	public Appointment createAppoinment( @RequestBody Appointment appointment) {
		appointment.setId(null);
		return appointmentRepository.save(appointment);
	}
	
	@GetMapping("/appointments")
	public List<Appointment>getAppointments()
	{
		return appointmentRepository.findAll(); 
	}
	
	@DeleteMapping("/appointments/{id}")
	public ResponseEntity<Map<String,Boolean>>deleteAppoinment(@PathVariable long id) throws AttributeNotFoundException{
		
	Appointment appointment=appointmentRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Appointment not found with"+id));
		
		appointmentRepository.delete(appointment);
		
		Map<String,Boolean>response=new HashMap<String, Boolean>();
		
		response.put("deleted",Boolean.TRUE);
		
		return ResponseEntity.ok(response);
		
	}
	
}
