import { PatientDTO } from './../../api/models/patient-dto';
import { Util } from './../../services/util';
import { KeycloakService } from './../../services/security/keycloak.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { CommandResourceService, QueryResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.page.html',
  styleUrls: ['./login-signup.page.scss'],
})
export class LoginSignupPage implements OnInit {

  value = 'login';
  username;
  password;
  email;
  patientDTO: PatientDTO = {};

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  signupForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

  @ViewChild('slides', { static: false }) slides: IonSlides;
  constructor(
    private keycloakService: KeycloakService,
    private util: Util,
    private command: CommandResourceService,
    private query: QueryResourceService
  ) { }

  ngOnInit() {
  }

  switchSlide(num) {
    if (num === 0) {
      this.value = 'login';
      this.slides.slideTo(0);
    } else {
      this.value = 'signup';
      this.slides.slideTo(1);
    }
  }

  login() {
    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;
    this.keycloakService.authenticate(
      { username: this.username, password: this.password },
      () => {
        this.patientDTO.idpCode=this.username;
        this.createPatient();
        this.util.navigateRoot();
        this.util.createToast('Logged in successfully' , 'checkmark-circle-outline');
      },
      () => this.util.createToast('Invalid user credentials' , 'close-circle-outline')
    );
  }

  signup() {
    this.username = this.signupForm.get('username').value;
    this.email = this.signupForm.get('email').value;
    this.password = this.signupForm.get('password').value;
    const user = { username: this.username, email: this.email };
    this.keycloakService.createAccount(user, this.password,
      () => {
        this.login();
      },
      err => {
        if (err.response.status === 409) {
          this.util.createToast('User Already Exists');
        } else {
          this.util.createToast('Cannot Register User. Please Try Later');
        }
      });
  }

  createPatient() {
    this.command.createPatientUsingPOST(this.patientDTO).subscribe(patient => {
      console.log('patient created', patient);
    });
  }

}
