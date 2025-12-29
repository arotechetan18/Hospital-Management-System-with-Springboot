package com.Hospital_Management_System.Doclogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hospital_Management_System.Doclogin.entity.Appointment;


@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Long> {

}
