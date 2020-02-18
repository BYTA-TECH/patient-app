import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QualificationsListPage } from './qualifications-list.page';

const routes: Routes = [
  {
    path: '',
    component: QualificationsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QualificationsListPage]
})
export class QualificationsListPageModule {}
