import { IonicModule } from '@ionic/angular';
import { RequestConfimationPopoverComponent } from './request-confimation-popover/request-confimation-popover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadRecordsComponent } from './upload-records/upload-records.component'



@NgModule({
  declarations: [
    UploadRecordsComponent,
    RequestConfimationPopoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    UploadRecordsComponent,
    RequestConfimationPopoverComponent
  ]
})
export class ComponentsModule { }
