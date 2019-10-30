import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadRecordsComponent } from './upload-records/upload-records.component'



@NgModule({
  declarations: [
    UploadRecordsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UploadRecordsComponent
  ]
})
export class ComponentsModule { }
