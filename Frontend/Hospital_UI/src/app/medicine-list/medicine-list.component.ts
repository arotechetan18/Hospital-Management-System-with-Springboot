import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrl: './medicine-list.component.css'
})
export class MedicineListComponent implements OnInit {

  medicines:Medicine[]=[]
  constructor(private medicineService:MedicineService,private router:Router){

  }

  ngOnInit():void{
    this.getMedicines();
  }

  getMedicines(){
    this.medicineService.getMedicines().subscribe(data=>{

      this.medicines=data;
    })
  }

  update(id:number){
    this.router.navigate([`update-medicine`,id])

  }
  deleteMedicine(id:number){
    this.medicineService.deleteMedicine(id).subscribe(data=>{
      console.log(data);
      this.getMedicines();
    })
  }

}
