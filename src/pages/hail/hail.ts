import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataFileService } from '../../providers/data-file-service';

@Component({
  selector: 'page-hail',
  templateUrl: 'hail_page.html'
})
export class HailListPage {
  items:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataFileService: DataFileService) {

  }


  ionViewDidLoad(){
    let dataPromise = this.dataLoad();

    dataPromise.then(data => {});
  }

  dataLoad(){
    return new Promise(resolve => {
      let file = 'assets/data/hail-sizes.json';
      this.dataFileService.load(file)
        .then(data => {
          this.items = data;
        });
    })

  }
}
