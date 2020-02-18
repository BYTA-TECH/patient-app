import { AuthGuardService } from './services/security/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
   // canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: './pages/login-signup/login-signup.module#LoginSignupPageModule'
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule'
  },
  { path: 'appointments', loadChildren: './pages/my-appointments/my-appointments.module#MyAppointmentsPageModule' },
  { path: 'medical-records', loadChildren: './pages/medical-records/medical-records.module#MedicalRecordsPageModule' },
  { path: 'doctor-booking', loadChildren: './pages/doctor-booking/doctor-booking.module#DoctorBookingPageModule' },
  {
    path: 'doctor-booking/:id',
    loadChildren: './pages/doctor-booking/doctor-booking.module#DoctorBookingPageModule',

  },
  { path: 'doctors-list', loadChildren: './pages/doctors-list/doctors-list.module#DoctorsListPageModule' },
  { path: 'qualifications-list', loadChildren: './pages/qualifications-list/qualifications-list.module#QualificationsListPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
