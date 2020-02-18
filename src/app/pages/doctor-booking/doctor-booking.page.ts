import { Slot } from './../../api/models/slot';

// import { DataService } from 'src/app/services/data.service';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { Doctor } from './../../api/models/doctor';
import {
  QueryResourceService,
  CommandResourceService
} from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PopoverController, NavController } from '@ionic/angular';
import { RequestConfimationPopoverComponent } from 'src/app/components/request-confimation-popover/request-confimation-popover.component';

@Component({
  selector: 'app-doctor-booking',
  templateUrl: './doctor-booking.page.html',
  styleUrls: ['./doctor-booking.page.scss']
})
export class DoctorBookingPage implements OnInit {
  doctorId: string;
  keyCloakUser: any = {};
  doctor: Doctor;
  currentDate = new Date();
  datePick: string;
  slotsMorningSession: Slot[] = [];
   slotsAfternoonSession: Slot[] = [];
   slotsEveningSession: Slot[] = [];
  kcAdminClient: KeycloakAdminClient;
  dataService: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private queryResourceService: QueryResourceService,
    private commandResource: CommandResourceService,
    private popoverCtrl: PopoverController,
    // private dataService: DataService,
    private navCtrl: NavController
  ) {
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
      baseUrl: 'http://35.196.86.249:8080/auth'
    });
  }

  async presentPopover(taskId: string, trackingId: string) {
    const popover = await this.popoverCtrl.create({
      component: RequestConfimationPopoverComponent,
      translucent: true,
      componentProps: {
        approvalType: this.doctor.doctorSettings.approvalType,
        paymentEnabled: this.doctor.paymentSettings.isPaymentEnabled,
        taskId,
        trackingId
      }
    });
    return await popover.present();
  }
  ngOnInit() {
    this.datePick = new DatePipe('en-US').transform(new Date(), 'MM-dd-yyyy');
    this.doctorId = this.activateRoute.snapshot.paramMap.get('id');
    this.queryResourceService.findDoctorByDoctorIdpCodeUsingGET(this.doctorId)
      .subscribe(result => {
        this.doctor = result;
        this.dataService.doctor = result;
        this.loadSessions();
      });
    this.configureKeycloakAdmin();
  }

  initiateAppointment(date: string, startTime: number, endTime: number) {
    this.commandResource
      .createInitiateAppointmentUsingPOST({
        doctorId: this.doctor.doctorIdpCode,
        slot: {
          // day: date,
          // endTime: this.getHour(endTime) + ':' + this.getMinutes(endTime),
          // startTime: this.getHour(startTime) + ':' + this.getMinutes(startTime)
        }
      })
      .subscribe(result => {
        this.dataService.trackingId = result.trackingId;
        console.log(result.status);
        console.log(result._links);
        console.log('Next task id is ' + result.nextTaskId);
        console.log('Next task name is ' + result.taskName);
        console.log('Tracking id is ' + result.trackingId);
        if (this.doctor.doctorSettings.approvalType === 'manual') {
          this.presentPopover(result.nextTaskId, result.trackingId);
        } else if (this.doctor.doctorSettings.approvalType === 'automatic') {
          this.commandResource
          .sendAppointmentRequestUsingPOST({
            taskId: result.nextTaskId,
            appointmentConfirmationRequest: { requestConfirmation: 'confirm' }
          }).subscribe(response => {
            this.dataService.nextTaskId = response.nextTaskId;
            this.navCtrl.navigateForward(
              'appointment-confirmation/' + result.trackingId
            );
          });
        }
      });
  }

  loadSessions() {
    this.slotsMorningSession = [];
    this.slotsAfternoonSession = [];
    this.slotsEveningSession = [];
    console.log('Current Date is ' + this.currentDate);
    // this.queryResourceService
    //   .test2UsingGET({
    //     doctorId: this.doctor.id,
    //     date: new DatePipe('en-US').transform(this.datePick, 'yyyy-MM-dd')
    //   }).subscribe(result => {
    //     result.forEach(slot => {
    //       if (slot.endTime <= 12) {
    //         this.slotsMorningSession.push(slot);
    //       } else if (slot.endTime > 12 && slot.endTime <= 14) {
    //         this.slotsAfternoonSession.push(slot);
    //       } else if (slot.endTime > 14) {
    //         this.slotsEveningSession.push(slot);
    //       }
    //     });
    //   });
  }

  getHour(value: number): any {
    value = Math.trunc(value);
    return value;
  }

  getMinutes(value: number): any {
    const valstr = value.toString();
    const stringar = valstr.split('.');
    // tslint:disable-next-line: no-construct
    let fractValue = new String(stringar[1]);
    if (fractValue.length === 1) {
      fractValue = fractValue + '0';
    }
    // tslint:disable-next-line: triple-equals
    if (fractValue == 'undefined') {
      fractValue = '00';
    }
    return fractValue;
  }

  genRating(value: number): any[] {
    value = Math.trunc(value);
    return new Array(value);
  }

  configureKeycloakAdmin() {
    this.kcAdminClient
      .auth({
        username: 'admin',
        password: 'karma123',
        grantType: 'password',
        clientId: 'admin-cli'
      })
      .then(data => {
        this.getDoctor();
      });
  }

  getDoctor() {
    this.kcAdminClient.users
      .find({ realm: 'Ayoos', username: this.doctorId })
      .then(data => {
        console.log(data);
        this.keyCloakUser = data[0];
      })
      .catch(data => {
        console.log('Got User From Keycloak', data);
      });

  }
}
