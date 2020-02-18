import { NavController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommandResourceService } from 'src/app/api/services';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-request-confimation-popover',
  templateUrl: './request-confimation-popover.component.html',
  styleUrls: ['./request-confimation-popover.component.scss']
})
export class RequestConfimationPopoverComponent implements OnInit {
  approvalType;
  taskId;
  trackingId;
  paymentEnabled: boolean;
  constructor(
    private commandResource: CommandResourceService,
    private navCtrl: NavController,
    private popoverCtrl: PopoverController,
    // private dataService: DataService
  ) {}

  sendAppointmentRequest() {
    this.commandResource
      .sendAppointmentRequestUsingPOST({
        taskId: this.taskId,
        appointmentConfirmationRequest: { requestConfirmation: 'confirm' }
      })
      .subscribe(response => {
        // this.dataService.nextTaskId = response.nextTaskId;
        // this.dataService.nextTaskName = response.taskName;
        // this.dataService.trackingId = this.trackingId;
        if (this.approvalType == 'manual') {
          this.navCtrl.navigateForward('home');
        } else {
          this.navCtrl.navigateForward('appointment-confirmation/' + this.trackingId);
        }
      });
    this.popoverCtrl.dismiss();
  }

  ngOnInit() {}

  set
}
