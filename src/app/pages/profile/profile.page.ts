import { PatientDTO } from './../../api/models/patient-dto';
import { CommandResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  showAddress = false;
  editMode = false;

  patient: PatientDTO = {};
  tempPatient = this.patient;

  constructor(
    private command: CommandResourceService
  ) { }

  ngOnInit() {
  }

  toggleshowAddress() {
    this.showAddress = !this.showAddress;
  }

  toggleEditable() {
    this.editMode = !this.editMode;
  }

  update() {
    this.command.updatePatientUsingPUT(this.patient).subscribe();
  }
}
