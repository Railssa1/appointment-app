import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];

  newAppointmentTitle = "";
  newAppointmentDate = new Date();

  ngOnInit(): void {
      const savedAppointments = localStorage.getItem("appointments");
      this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment(): void {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentTitle){
      const newAppointment: Appointment = {
        id: Math.floor(Math.random() * (250 - 1) + 1),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      };

      this.appointments.push(newAppointment);
      this.setAppointmentsLocalstorage(this.appointments);
    }
  }

  deleteAppointment(index: number): void {
    this.appointments.splice(index, 1);
    this.setAppointmentsLocalstorage(this.appointments);
  }

  setAppointmentsLocalstorage(appointments: Appointment[]): void {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }
}
