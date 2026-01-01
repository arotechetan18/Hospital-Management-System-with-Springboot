
package com.Hospital_Management_System.Doclogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hospital_Management_System.Doclogin.entity.Medicine;
import com.Hospital_Management_System.Doclogin.repository.MedicineRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3")
public class MedicineController {
	
	@Autowired
	private MedicineRepository medicineRepository;

	public MedicineController(MedicineRepository medicineRepository) {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping("/medicines")
	public Medicine createMedicine(@RequestBody Medicine medicine)
	{
		return  medicineRepository.save(medicine);
	}

	@GetMapping("/medicines")
	public List<Medicine>getMedicines(){
		
		return medicineRepository.findAll();
	}
}
