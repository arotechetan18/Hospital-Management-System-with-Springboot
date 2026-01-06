import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminauthGuardService } from './adminauth-guard.service';

const routes: Routes = [
 { path:'admin',component:AdmindashboardComponent,canActivate:[AdminauthGuardService]},
 {path:'appointmentlist',component:AppointmentComponent,canActivate:[AdminauthGuardService]},
 {path:'create-appointment',component:CreateAppointmentComponent,canActivate:[AdminauthGuardService]},
 {path:'home',component:HomepageComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'doctordashboard',component:DoctorDashboardComponent},
 {path:'createpatient',component:CreatePatientComponent},
 {path:'view-medicines',component:MedicineListComponent},
 {path:'create-medicine',component:CreateMedicineComponent},
 {path:'update-patient/:id',component:UpdatePatientComponent},
 {path:'view-patient/:id',component:ViewPatientComponent},
 {path:'update-medicine/:id',component:UpdateMedicineComponent},
 {path:'doctor-login',component:DoctorLoginComponent},
 {path:'adminlogin',component:AdminloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
