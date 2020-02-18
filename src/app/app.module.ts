import { GoogleMapsAPIWrapper, AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Util } from './services/util';
import { ConfigsModule } from './configs/configs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AuthInterceptor } from './services/security/auth-interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ConfigsModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwC9dPmp280b4C18RBcGWjInRi9NGxo5c',
      libraries: ['places', 'geometry']
    }),
    IonicModule.forRoot(),
  ],
  providers: [
    Util,
    StatusBar,
    SplashScreen,
   HttpClientModule,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
   },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation, GoogleMapsAPIWrapper,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
