//import { LocationService } from './../../services/location-service.service';
import { Component, OnInit } from '@angular/core';
//import { MapsAPILoader } from '@agm/core';
//import {Geolocation} from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { Appointment } from './../../Appointment';

declare var google: any;

 @Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.page.html',
  styleUrls: ['./my-appointments.page.scss'],
})
export class MyAppointmentsPage implements OnInit {

  constructor(//private locationService:LocationService,
  //private mapsLoader:MapsAPILoader,
  //private geolocation:Geolocation,
  private router:Router) {
   
   }

  currentLat:number;
  currentLon:number;
  appointmentsAll:Appointment[] = [];
  segment:string="Today";
  appointmentsSegment:Appointment[]=[];
 
  routeToDetailView(id:number){
    this.router.navigate(['/','appointment-detail',id]);
  }

  doRefresh(event:any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      //this.calculateDistanceMatrix();
      event.target.complete();
    }, 2000);
  }
  segmentPrevious(){
    this.appointmentsSegment=[];
    this.appointmentsAll.forEach(appointment=>{
      let temp=new Date();
      let today=new Date(temp.getFullYear(),temp.getMonth(),temp.getDate());
        if(appointment.date.getTime()-today.getTime()<0){
          console.log("All previous filter")
            if(appointment.date.getTime()!=today.getTime()){
              this.appointmentsSegment.push(appointment);
              console.log("It works Previous");
            }
        }
    });
    console.log("Previous")
    this.segment="Previous";
  }
  segmentToday(){
    this.appointmentsSegment=[];
    console.log("Segment Today Method");
    this.appointmentsAll.forEach(appointment=>{
      let today=new Date()
        if(appointment.date.getDate()==today.getDate()&&appointment.date.getMonth()==today.getMonth()&&appointment.date.getFullYear()==today.getFullYear()){
            this.appointmentsSegment.push(appointment);
            console.log("It works Today");
        }
    });
    console.log("Today")
    this.segment="Today";
  }
  segmentUpcoming(){
    this.appointmentsSegment=[];
    this.appointmentsAll.forEach(appointment=>{
      let today=new Date()
        if(appointment.date.getTime()-today.getTime()>0){
            this.appointmentsSegment.push(appointment);
            console.log("It works Upcoming");
        }
    });
    console.log("Upcoming")
    this.segment="Upcoming";
  }

  ngOnInit() {
    //this.getCurrentLocation();
   // this.appointmentsAll=APPOINTMENTS;
    //this.calculateDistanceMatrix();  
    this.segmentToday();
    setTimeout(() => {
      console.log('Async Distance matrix ');
      //this.calculateDistanceMatrix();
    }, 1000);
  }

  // calculateDistanceMatrix(){
  //   this.appointmentsAll.forEach(appointment=>{
  //     this.mapsLoader.load().then(()=>{
  //       console.log("Current lat is "+this.currentLat+" Lon is "+this.currentLon);
  //       const from = new google.maps.LatLng(this.currentLat, this.currentLon);
  //       const to = new google.maps.LatLng(appointment.doctor.lat, appointment.doctor.lon);
  //       let distance=this.locationService.calculateDistance(from,to);
  //       let distanceKms=distance/1000;
  //       appointment.doctor.distance=distanceKms;
  //       console.log('Distance in kms '+distanceKms);
  //     });
       
   // });
  //}


  // getCurrentLocation(){
  //   this.geolocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }).then(resp=>{
  //     this.currentLat=resp.coords.latitude;
  //    this.currentLon=resp.coords.longitude;
  //    console.log("Lat is "+this.currentLat);
  //    console.log("Lon is "+this.currentLon);
  //  });
  // }

}
