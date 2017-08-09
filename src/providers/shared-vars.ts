import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform} from 'ionic-angular';


@Injectable()
export class SharedVars {
    spotterNumber:any;
    phone1:any;
    phone2: any;
    reportUrl: any;
    contactName: any;
    contactEmail: any;
    contactPhone: any;
    
   
constructor(private platform: Platform,private storage: Storage) {

  }
setSpotterNumber(value){
    this.spotterNumber = value;
    this.storage.set('spotterNumber',this.spotterNumber);
}

setPhone1(value){
    this.phone1 = value;
    this.storage.set('phone1',this.phone1);
}

setPhone2(value){
    this.phone2 = value;
    this.storage.set('phone2',this.phone2);
}


setReportUrl(value){
    this.reportUrl = value;
    this.storage.set('reportUrl',this.reportUrl);
}
setContactName(value){
    this.contactName = value;
    this.storage.set('contactName',this.contactName);
}


setContactEmail(value){
    this.contactEmail = value;
    this.storage.set('contactEmail',this.contactEmail);
}


setContactPhone(value){
    this.contactPhone = value;
    this.storage.set('contactPhone',this.contactPhone);
}

getSpotterNumber(){
    return new Promise(resolve => {
        if(typeof(this.spotterNumber) !== 'undefined'){
            resolve( this.spotterNumber);
        } else {
            this.storage.get('spotterNumber').then((value) => {
  		        if(value && typeof(value) !== 'undefined'){
  		            this.spotterNumber = value;
                    resolve(this.spotterNumber);
                } else {
                    this.spotterNumber = "";
                    this.setSpotterNumber(this.spotterNumber);
                    resolve(this.spotterNumber);
                }
            });

        }
    });
}
getPhone1(){
    return new Promise(resolve => {
        if(typeof(this.phone1) !== 'undefined'){
            resolve( this.phone1);
        } else {
            this.storage.get('phone1').then((value) => {
  		        if(value && typeof(value) !== 'undefined'){
  		            this.phone1 = value;
                    resolve(this.phone1);
                } else {
                    this.phone1 = "";
                    this.setPhone1(this.phone1);
                    resolve(this.phone1);
                }
            });

        }
    });
}


getPhone2(){
    return new Promise(resolve => {
        if(typeof(this.phone2) !== 'undefined'){
            resolve( this.phone2);
        } else {
            this.storage.get('phone2').then((value) => {
  		        if(value && typeof(value) !== 'undefined'){
  		            this.phone2 = value;
                    resolve(this.phone2);
                } else {
                    this.phone2 = "";
                    this.setPhone2(this.phone2);
                    resolve(this.phone2);
                }
            });

        }
    });
}


getReportUrl(){
    return new Promise(resolve => {
        if(typeof(this.reportUrl) !== 'undefined'){
            resolve( this.reportUrl);
        } else {
            this.storage.get('reportUrl').then((value) => {
  		        if(value && typeof(value) !== 'undefined'){
  		            this.reportUrl = value;
                    resolve(this.reportUrl);
                } else {
                    this.reportUrl = "";
                    this.setReportUrl(this.reportUrl);
                    resolve(this.reportUrl);
                }
            });

        }
    });
}
getContactName(){
    return new Promise(resolve => {
        if(typeof(this.contactName) !== 'undefined'){
            resolve( this.contactName);
        } else {
            this.storage.get('contactName').then((value) => {
  		        if(value && typeof(value) !== 'undefined'){
  		            this.contactName = value;
                    resolve(this.contactName);
                } else {
                    this.contactName = "";
                    this.setContactName(this.contactName);
                    resolve(this.contactName);
                }
            });

        }
    });
}


getContactEmail(){
    return new Promise(resolve => {
        if(typeof(this.contactEmail) !== 'undefined'){
            resolve( this.contactEmail);
        } else {
            this.storage.get('contactEmail').then((value) => {
  		        if(value && typeof(value) !== 'undefined'){
  		            this.contactEmail = value;
                    resolve(this.contactEmail);
                } else {
                    this.contactEmail = "";
                    this.setContactEmail(this.contactEmail);
                    resolve(this.contactEmail);
                }
            });

        }
    });
}

getContactPhone(){
    return new Promise(resolve => {
        if(typeof(this.contactPhone) !== 'undefined'){
            resolve( this.contactPhone);
        } else {
            this.storage.get('contactPhone').then((value) => {
  		        if(value && typeof(value) !== 'undefined'){
  		            this.contactPhone = value;
                    resolve(this.contactPhone);
                } else {
                    this.contactPhone = "";
                    this.setContactPhone(this.contactPhone);
                    resolve(this.contactPhone);
                }
            });

        }
    });
}
    launch(url) {
        window.open(url, "_system", "location=true");
        
    }
}