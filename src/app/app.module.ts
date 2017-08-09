import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { DataFileService } from '../providers/data-file-service';
import { SharedVars } from '../providers/shared-vars';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SevereWeatherListPage} from '../pages/severe_weather/severe_weather';
import { SevereWeatherDetailsPage } from '../pages/severe_weather/severe_weather_details';
import { WinterWeatherListPage} from '../pages/winter_weather/winter_weather';
import { WinterWeatherDetailsPage } from '../pages/winter_weather/winter_weather_details';
import { WindListPage} from '../pages/wind/wind';
import { HailListPage} from '../pages/hail/hail';
import { SpotterDataPage} from '../pages/spotter_data/spotter_data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SevereWeatherListPage,
    SevereWeatherDetailsPage,
    WinterWeatherListPage,
    WinterWeatherDetailsPage,
    WindListPage,
    HailListPage,
    SpotterDataPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SevereWeatherListPage,
    SevereWeatherDetailsPage,
    WinterWeatherListPage,
    WinterWeatherDetailsPage,
    WindListPage,
    HailListPage,
    SpotterDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataFileService,
    SharedVars,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
