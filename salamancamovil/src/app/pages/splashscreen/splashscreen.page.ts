
import { Component, OnInit } from '@angular/core';

import { ViewController } from 'ionic-angular';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})

export class SplashScreenPage implements OnInit {

  constructor(
    private splashScreen: SplashScreen,
    private viewController: ViewController
  ) {

  }

  ngOnInit() {
    this.manageSplash();
  }

  manageSplash() {
    console.log("manage splash function");

    this.splashScreen.hide();

    setTimeout(() => {
      this.viewController.dismiss();
    }, 3000);
  }
}
