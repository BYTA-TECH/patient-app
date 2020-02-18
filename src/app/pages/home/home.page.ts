/*import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}*/
import { LocationService } from './../../services/location-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PopoverController, ModalController, IonSlides, NavController } from '@ionic/angular';
// import { PopoverComponent } from '../popover/popover.component';
// import { FullTextSearchPage } from '../full-text-search/full-text-search.page';
import { MapsAPILoader } from '@agm/core';
import { Doctor } from 'src/app/api/models';
import { QueryResourceService } from 'src/app/api/services';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

constructor(private popoverController: PopoverController,
            private modalController: ModalController,
            private locationService: LocationService,
            private mapsAPILoader: MapsAPILoader,
            private queryService: QueryResourceService,
            private navCtrl: NavController) {

}
@ViewChild('slides', null) slides: IonSlides;
result: Observable<any>;
  currentLocation: string;
  searchTerm = '';
  selectedTab = 'All';
  currentDate = new Date();

  topDoctors: Doctor[];

  sliderConfig = {
    loop: true,
    autoplay: true
  };

  // async presentFullTextSearch() {
  //   const modal = await this.modalController.create({
  //     component: FullTextSearchPage,
  //   });
  //   return await modal.present();
  // }


  searchChanged() {

  }

  navigateToNotifications() {
    this.navCtrl.navigateForward('notifications');
  }

  segmentDoctors() {
    this.selectedTab = 'Doctors';
  }

  segmentSpecializations() {
    this.selectedTab = 'Qualification';
  }
  segmentClinics() {
    this.selectedTab = 'clinics';
  }


  getTopDoctors() {

   this.queryService.findAllDoctorsUsingGET({page: 0}).subscribe(doctors => {
     this.topDoctors = doctors;
     console.log(doctors);
   });

  }

  genArray(value: number): any[] {
    value = Math.trunc(value);
    return new Array(value);
  }
  doRefresh(event: any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getCurrentLocation();
      event.target.complete();
    }, 2000);
  }
  getCurrentLocation() {
    this.mapsAPILoader.load().then(() => {
      // tslint:disable-next-line: new-parens
      const geocoder = new google.maps.Geocoder;
      console.log('Current lagt lon is ' + this.locationService.currentLat);
      const latlng = { lat: this.locationService.currentLat, lng: this.locationService.currentLon };
      geocoder.geocode({ location: latlng }, (results: any, status: any) => {
        this.currentLocation = results[0].formatted_address.split(',', 1)[0];
      });
    });
  }
  ngOnInit() {
    this.slides.startAutoplay();
    this.locationService.getCurrentLocation();
    this.getTopDoctors();
    this.getCurrentLocation();
    setTimeout(() => {
      console.log('Async Distance Currengt location ');
      this.getCurrentLocation();
    }, 2000);
  }
  async presentFullTextSearch() {
   /* const modal = await this.modalController.create({
    component: FullTextSearchPage,
    });
    return await modal.present();*/
  }
}
