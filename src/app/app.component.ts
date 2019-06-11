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
      url: '/login',
      icon: 'home'
    },
    {
      title: 'Course',
      url: '/course',
      icon: 'list'
    },
    {
      title: 'Videos',
      url: '/course',
      icon: 'list'
    },
    {
      title: 'Social Media',
      url: '/course',
      icon: 'list'
    },
    {
      title: 'Profile',
      url: '/course',
      icon: 'list'
    },
    {
      title: 'Glossary',
      url: '/course',
      icon: 'list'
    },
    {
      title: 'About',
      url: '/course',
      icon: 'list'
    },
    {
      title: 'Privacy Policy',
      url: '/course',
      icon: 'list'
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
}
