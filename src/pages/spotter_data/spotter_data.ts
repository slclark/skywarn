import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SharedVars } from '../../providers/shared-vars';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-spotter-data',
  templateUrl: 'spotter_data_page.html'
})
export class SpotterDataPage {
   private spotterData : FormGroup;
   private submitAttempt:Boolean = false;
   private patterns:any = {
   'phone': '^[0-9]{3}(-)?[0-9]{3}(-)?[0-9]{4}$',
   'email': '^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$',
   'url': '^(http|https):\/\/(.)*'
   }

  constructor(private formBuilder: FormBuilder, public sharedVars:SharedVars, public navCtrl: NavController, public navParams: NavParams) {
  
 this.spotterData = this.formBuilder.group({
      spotterNumber: ['', Validators.compose([Validators.maxLength(5), Validators.pattern('[A-Z0-9]*'), Validators.required])],
      phone1: ['', Validators.compose([Validators.pattern(this.patterns.phone), Validators.required])],
      phone2: ['', Validators.compose([Validators.pattern(this.patterns.phone)])],
      reportUrl: ['', Validators.compose([Validators.pattern(this.patterns.url)])],
      contactName: ['', Validators.required],
      contactEmail: ['', Validators.compose([Validators.pattern(this.patterns.email), Validators.required])],
      contactPhone: ['', Validators.compose([Validators.pattern(this.patterns.phone), Validators.required])]
    });
    
  this.retrieveData();
  }
  retrieveData(){
        //spotter number
      let promise = this.sharedVars.getSpotterNumber();
        promise.then(data => {
            this.spotterData.get('spotterNumber').setValue(data);
        });
        // phones
        promise = this.sharedVars.getPhone1();
        promise.then(data => {
            this.spotterData.get('phone1').setValue(data);
        });
        promise = this.sharedVars.getPhone2();
        promise.then(data => {
        
            this.spotterData.get('phone2').setValue(data);
        });
        promise = this.sharedVars.getContactPhone();
        promise.then(data => {
            this.spotterData.get('contactPhone').setValue(data);
        });
        // other contact info
        
        promise = this.sharedVars.getContactName();
        promise.then(data => {
            this.spotterData.get('contactName').setValue(data);
        });
        
        promise = this.sharedVars.getContactEmail();
        promise.then(data => {
            this.spotterData.get('contactEmail').setValue(data);
        });
        // report Url
        promise = this.sharedVars.getReportUrl();
        promise.then(data => {
            this.spotterData.get('reportUrl').setValue(data);
        });
  
  
  }
  save(){
 
    this.submitAttempt = true;
 
    if(this.spotterData.valid){
    var val = '';
        // save spotter number
        this.sharedVars.setSpotterNumber(this.spotterData.controls.spotterNumber.value);
        // strip all extra chars, then add dashes for phone numbers
        val = this.formatPhoneNumber(this.spotterData.controls.phone1.value);
        this.spotterData.get('phone1').setValue(val);
        this.sharedVars.setPhone1(val);
        val = this.formatPhoneNumber(this.spotterData.controls.phone2.value);
        this.spotterData.get('phone2').setValue(val);
        this.sharedVars.setPhone2(val);
        val = this.formatPhoneNumber(this.spotterData.controls.contactPhone.value);
        this.spotterData.get('contactPhone').setValue(val);
        this.sharedVars.setContactPhone(val);
        
        // remaining contact name
        this.sharedVars.setContactName(this.spotterData.controls.contactName.value);
        this.sharedVars.setContactEmail(this.spotterData.controls.contactEmail.value);
        
        // reportUrl
        this.sharedVars.setReportUrl(this.spotterData.controls.reportUrl.value);
        
    
        console.log("success!")
    }
    this.logForm();
 
}

formatPhoneNumber(val){
   var data = val.replace(/\D/g,'');
   return data.toString().substr(0,3) + '-' + data.toString().substr(4,3) + '-' + data.toString().substr(6);
}
  logForm(){
    console.log(this.spotterData.value)
  }
}
