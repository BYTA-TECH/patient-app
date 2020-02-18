// import { Appointment, Doctor } from 'src/app/api/models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nextTaskId: string;
  nextTaskName: string;
  trackingId: string;
  // appointment: Appointment;
  // paymentMethod: string;
  // doctor: Doctor;
  constructor() { }
}