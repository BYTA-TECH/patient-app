import { Util } from './../../services/util';
import { KeycloakService } from './../../services/security/keycloak.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.page.html',
  styleUrls: ['./login-signup.page.scss'],
})
export class LoginSignupPage implements OnInit {

  value = 'login';
  username;
  password;

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  @ViewChild('slides', { static: false }) slides: IonSlides;
  constructor(
    private keycloakService: KeycloakService,
    private util: Util
  ) { }

  ngOnInit() {
  }

  slide(value) {
    this.value = value.detail.value;
    if (this.value === 'login') {
      this.slides.slideTo(0);
    } else {
      this.slides.slideTo(1);
    }
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
        this.util.navigateRoot();
        console.log('Login Success');
      },
      () => console.log('Login Failed')
    );
  }

}
