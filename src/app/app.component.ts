import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/dashboard3',
      index: 0
    },
    {
      title: 'Course',
      url: '/course',
      index: 1
    },
    {
      title: 'Videos',
      url: '/videos',
      index: 2
    },
    {
      title: 'Social Media',
      url: '/course',
      index: 3
    },
    {
      title: 'Profile',
      url: '/profile',
      index: 4
    },
    {
      title: 'Glossary',
      url: '/glosary',
      index: 5
    },
    {
      title: 'About',
      url: '/course',
      index: 6
    },
    {
      title: 'Privacy Policy',
      url: '/course',
      index: 7
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  seleccion(index){
    var i = 0;
    for ( i = 0; i < 8; i++) {
      if (i == index) {
        console.log(i + "rojo");
        document.getElementById(i).style.color = "#F55000";
        document.getElementById(i).style.borderLeft = "solid 3px #F55000";
        document.getElementById(i).style.fontStyle = "oblique";
      }else{
        console.log(i + "gris");
        document.getElementById(i).style.color = "black";
        document.getElementById(i).style.borderLeft = "transparent";
        document.getElementById(i).style.fontStyle = "normal";
      }
    }
  }

}
