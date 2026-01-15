
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
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping("/medicines/{id}")
	public ResponseEntity<Medicine>getMedicineById(@PathVariable long id) throws AttributeNotFoundException{
		
		Medicine medicine=medicineRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Medicine Not found with"+id));
		return ResponseEntity.ok(medicine);
	}
	
	@PutMapping("/medicines/{id}")
	public ResponseEntity<Medicine>updatMedicine(@PathVariable long id,@RequestBody Medicine medicineDetails) throws AttributeNotFoundException{
		
		Medicine medicine=medicineRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Medicine Not found with"+id));
		medicine.setDrugname(medicineDetails.getDrugname());
		medicine.setStock(medicineDetails.getStock());
		
		medicineRepository.save(medicine);
		return ResponseEntity.ok(medicine);
	}
	
	@DeleteMapping("/medicines/{id}")
	public ResponseEntity<Map<String,Boolean>>deleteMedicine(@PathVariable long id) throws AttributeNotFoundException{
		Medicine medicine=medicineRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Medicine Not found with"+id));
		medicineRepository.delete(medicine);
		
		Map<String,Boolean>response=new HashMap<String, Boolean>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
