import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataFileService } from '../../providers/data-file-service';
import { WinterWeatherDetailsPage } from '../winter_weather/winter_weather_details';

@Component({
  selector: 'page-winter-weather',
  templateUrl: 'winter_weather_page.html'
})
export class WinterWeatherListPage {
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
      let file = 'assets/data/winter-weather.json';
      this.dataFileService.load(file)
        .then(data => {
          this.items = data;
        });
    })

  }
  itemTapped(event, item) {
    this.navCtrl.push(WinterWeatherDetailsPage, {
      item: item
    });
  }
}
