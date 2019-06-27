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
      title: 'Lesson',
      url: '/lesson',
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
      url: '/glossary',
      index: 5
    },
    {
      title: 'About',
      url: '/about',
      index: 6
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
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

  seleccion(index) {
    for (let i = 0; i < 8; i++) {
      if (i === index) {
        document.getElementById(i.toString()).style.color = '#F55000';
        document.getElementById(i.toString()).style.borderLeft = 'solid 3px #F55000';
        document.getElementById(i.toString()).style.fontStyle = 'oblique';
      } else {
        document.getElementById(i.toString()).style.color = 'black';
        document.getElementById(i.toString()).style.borderLeft = 'transparent';
        document.getElementById(i.toString()).style.fontStyle = 'normal';
      }
    }
  }

}
