import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  showAddress = false;
  editMode = false;

  patient = {
    name: 'Prince'
  };
  tempPatient = this.patient;

  constructor() { }

  ngOnInit() {
  }

  toggleshowAddress() {
    this.showAddress = !this.showAddress;
  }

  toggleEditable() {
    this.editMode = !this.editMode;
  }

}
