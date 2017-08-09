import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedVars } from '../../providers/shared-vars';
import { SpotterDataPage } from '../spotter_data/spotter_data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any = {};
  
  menu: string = "report";
  constructor(public sharedVars:SharedVars, public navCtrl: NavController) {

  this.retrieveData();
  }
  retrieveData(){
        //spotter number
      let promise = this.sharedVars.getSpotterNumber();
        promise.then(data => {
            this.data.spotterNumber=data;
        });
        // phones
        promise = this.sharedVars.getPhone1();
        promise.then(data => {
        console.log(data);
            this.data.phone1=data;
        });
        promise = this.sharedVars.getPhone2();
        promise.then(data => {
            this.data.phone2=data;
        });
        promise = this.sharedVars.getContactPhone();
        promise.then(data => {
            this.data.contactPhone=data;
        });
        // other contact info
        
        promise = this.sharedVars.getContactName();
        promise.then(data => {
            this.data.contactName=data;
        });
        
        promise = this.sharedVars.getContactEmail();
        promise.then(data => {
            this.data.contactEmail=data;
        });
        // report Url
        promise = this.sharedVars.getReportUrl();
        promise.then(data => {
            this.data.reportUrl=data;
        });
        
  }
  
  
  itemTapped(event) {
    this.navCtrl.push(SpotterDataPage, {
    });
  }

}
