import {Doctor} from './doctor';
export class Appointment{
   id:number;
    doctor:Doctor;
    date: Date;
    dateOfAppointment:Date;
    consultationChannel:string;
    symptoms:string[];
    status:string;
}