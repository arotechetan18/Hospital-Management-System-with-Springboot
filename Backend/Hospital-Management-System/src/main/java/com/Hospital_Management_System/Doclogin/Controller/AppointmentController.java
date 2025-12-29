package com.Hospital_Management_System.Doclogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hospital_Management_System.Doclogin.entity.Appointment;
import com.Hospital_Management_System.Doclogin.repository.AppointmentRepository;

@RestController
@RequestMapping("/api/v2")
public class AppointmentController {
	
	@Autowired
	private AppointmentRepository appointmentRepository;

	public AppointmentController(AppointmentRepository appointmentRepository) {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping("/insert")
	public Appointment createAppoinment( @RequestBody Appointment appointment) {
		
		return appointmentRepository.save(appointment);
	}
	
	@GetMapping
	public List<Appointment>getAppointments()
	{
		return appointmentRepository.findAll(); 
	}
}
