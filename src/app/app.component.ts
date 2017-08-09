import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SevereWeatherListPage } from '../pages/severe_weather/severe_weather';
import { WinterWeatherListPage } from '../pages/winter_weather/winter_weather';
import { WindListPage } from '../pages/wind/wind';
import { HailListPage } from '../pages/hail/hail';
import { SpotterDataPage } from '../pages/spotter_data/spotter_data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Severe Weather', component: SevereWeatherListPage },
      { title: 'Winter Weather', component: WinterWeatherListPage },
      { title: 'Wind Speeds', component: WindListPage },
      { title: 'Hail Sizes', component: HailListPage },
      { title: 'Spotter Data', component: SpotterDataPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
