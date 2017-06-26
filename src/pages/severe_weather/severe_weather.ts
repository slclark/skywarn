import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataFileService } from '../../providers/data-file-service';
import { SevereWeatherDetailsPage } from '../severe_weather/severe_weather_details';

@Component({
  selector: 'page-severe-weather',
  templateUrl: 'severe_weather_page.html'
})
export class SevereWeatherListPage {
  items:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataFileService: DataFileService) {

  }


  ionViewDidLoad(){
    let dataPromise = this.dataLoad();

    dataPromise.then(data => {});
  }

  dataLoad(){
    return new Promise(resolve => {
    let items = [];
      let file = 'assets/data/severe-weather.json';
      this.dataFileService.load(file)
        .then(data => {
          this.items = data;
        });
    })

  }
  itemTapped(event, item) {
    this.navCtrl.push(SevereWeatherDetailsPage, {
      item: item
    });
  }
}
