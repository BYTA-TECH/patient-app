// import { DoctorGrid } from './../../DoctorGrid';
// import { DOCTORS } from './../../mock-doctors';
// import { Doctor } from './../../doctor';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { FilterModalComponent } from '../filter-modal/filter-modal.component';
// import {MapViewDoctorsPage} from '../map-view-doctors/map-view-doctors.page';
import { QueryResourceService } from 'src/app/api/services';
import { Doctor } from 'src/app/api/models';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.page.html',
  styleUrls: ['./doctors-list.page.scss'],
})
export class DoctorsListPage implements OnInit {

  searchTerm = '';
  doctors: Doctor[] = [];
  // grids: DoctorGrid[];
  // selectedSearchTerm = '';

  constructor(
    private modalController: ModalController,
    private queryResourceService: QueryResourceService
  ) {
      // this.doctors=DOCTORS;
      // this.generateMultiDimensionalArray(DOCTORS);

  }

  ngOnInit() {

   // this.getDoctors();

  }
  searchChanged() {
  this.queryResourceService.findAllDoctorsUsingGET({page: 0}).subscribe(data => {
    console.log(data);
  });

  }

  async filterModal() {
    // const modal = await this.modalController.create(
    //   {
    //     component: FilterModalComponent,
    //   });

    // modal.onDidDismiss()
    //   .then(data => {
    //     console.log(data);
    //     this.queryResourceService.facetSearchUsingGET(data.data)
    //     .subscribe(result => {
    //     //  this.doctors = result.content;
    //     });
    //   });

    // modal.present();
  }


  loadData(ev) {

    this.queryResourceService.findAllDoctorsUsingGET({
      page: 2,
      size: 5,
    })
    .subscribe(result => {
      console.table(this.doctors);
    //  this.doctors = result.content;
      console.table(this.doctors);
    });
  }

  getDoctors() {

    this.queryResourceService.findAllDoctorsUsingGET({
      page: 0
    }).subscribe(data => {
      console.log(data);

    });
  }



  async presentModal() {
    /*const modal = await this.modalController.create({
      component: FilterModalComponent,
    });
    return await modal.present();*/
  }

  async presentMapModal() {
    /*const modal = await this.modalController.create({
      component: MapViewDoctorsPage,
      componentProps: { doctors: this.doctors }
    });
    return await modal.present();*/
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  genArray(value: number): any[] {
    value = Math.trunc(value);
    return new Array(value);
  }

  generateMultiDimensionalArray(doctors: Doctor[]) {
    // this.grids=new Array(doctors.length);
    // let i=0;
    // for( i=0;i<doctors.length;i++){
    //   let grid=new DoctorGrid();
    //   grid.firstCol=doctors[i];
    //   grid.secondCol=doctors[i+1];
    //   this.grids[i]=grid;
    //   ++i;
    //   console.log("value is "+i);
    // }
  }

}
