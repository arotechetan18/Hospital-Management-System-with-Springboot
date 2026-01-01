import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';

const routes: Routes = [
 { path:'admin',component:AdmindashboardComponent},
 {path:'appointmentlist',component:AppointmentComponent},
 {path:'create-appointment',component:CreateAppointmentComponent},
 {path:'home',component:HomepageComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'doctordashboard',component:DoctorDashboardComponent},
 {path:'createpatient',component:CreatePatientComponent},
 {path:'view-medicines',component:MedicineListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
