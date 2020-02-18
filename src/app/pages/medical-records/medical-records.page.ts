import { UploadRecordsComponent } from './../../components/upload-records/upload-records.component';
import { MedicalHistory } from './../../MedicalHistory';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.page.html',
  styleUrls: ['./medical-records.page.scss'],
})
export class MedicalRecordsPage implements OnInit {

  constructor(private modalController: ModalController, private router: Router) { }

  medicalHistories: MedicalHistory[] = [];
  segment = 'all';
  searchTerm: string;

  ngOnInit() {
    // this.medicalHistories=MEDICALRECORDS;
  }
  searchChanged() {
  }
  onSelectAyoosHR() {
    this.segment = 'ayoosHR';
  }
  onSelectUploaded() {
    this.segment = 'uploaded';
  }
  onSelectAll() {
    this.segment = 'all';
  }

  routeToDetailView(ref: string) {
    this.router.navigate(['/', 'medical-record-detail', ref]);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: UploadRecordsComponent,
    });
    return await modal.present();
  }

}
