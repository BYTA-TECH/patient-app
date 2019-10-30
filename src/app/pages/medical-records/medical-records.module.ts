import { UploadRecordsComponent } from './../../components/upload-records/upload-records.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, ModalController } from '@ionic/angular';

import { MedicalRecordsPage } from './medical-records.page';


const routes: Routes = [
  {
    path: '',
    component: MedicalRecordsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicalRecordsPage,UploadRecordsComponent],
  entryComponents:[UploadRecordsComponent]
})
export class MedicalRecordsPageModule {


}
