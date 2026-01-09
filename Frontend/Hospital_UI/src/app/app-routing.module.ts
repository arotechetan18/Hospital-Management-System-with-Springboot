

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { AuthGuard } from './auth-guard.service';
import { RoleGuard } from './role-guard.service';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },

  // --- ADMIN SECTION ---
  { 
    path: 'admin', 
    component: AdmindashboardComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { role: 'ADMIN' } 
  },
  { 
    path: 'appointmentlist', 
    component: AppointmentComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { role: 'ADMIN' } 
  },
  { 
    path: 'create-appointment', 
    component: CreateAppointmentComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { role: 'ADMIN' } 
  },

  // --- DOCTOR SECTION ---
  { 
    path: 'doctordashboard', 
    component: DoctorDashboardComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { role: 'DOCTOR' } 
  },
  { 
    path: 'createpatient', 
    component: CreatePatientComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { role: 'DOCTOR' } 
  },
  { 
    path: 'update-patient/:id', 
    component: UpdatePatientComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { role: 'DOCTOR' } 
  },
  { 
    path: 'view-patient/:id', 
    component: ViewPatientComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { role: 'DOCTOR' } 
  },
  { 
    path: 'view-medicines', 
    component: MedicineListComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { role: 'DOCTOR' } 
  },
  { 
    path: 'create-medicine', 
    component: CreateMedicineComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { role: 'DOCTOR' } 
  },
  { 
    path: 'update-medicine/:id', 
    component: UpdateMedicineComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { role: 'DOCTOR' } 
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



