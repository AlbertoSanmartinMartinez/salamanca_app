
import { Component } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Pages
//import { SplashScreenPage } from './pages/splashscreen/splashscreen.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalController: ModalController

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();

      this.splashScreen.show();

      //var splash = this.modalController.create()//SplashScreenPage)
      //splash.present();
      //this.modalController.hide();

      this.splashScreen.hide();
    });
  }
}
