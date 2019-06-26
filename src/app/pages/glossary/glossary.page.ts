import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.page.html',
  styleUrls: ['./glossary.page.scss'],
})
export class GlossaryPage implements OnInit {
  text = 'dasda';
  glossary = [
    {
      unit: [
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1',
          // link: 'https://elearningtest2019.000webhostapp.com/AGILE.pdf'
          link: {
            url: 'https://elearningtest2019.000webhostapp.com/AGILE.pdf',
            name: 'AgilePDF',
            type: 'download'
          }
        },
        {
          icon: 'link',
          text: 'Consectetur adipiscing elit',
          color: 's1',
          link: {
            url: 'https://www.google.com',
            name: 'Google',
            type: 'open'
          }
        },
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1'
        }
      ]
    },
    {
      unit: [
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1'
        },
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1'
        },
        {
          icon: 'link',
          text: 'Consectetur adipiscing elit',
          color: 's1'
        }
      ]
    }
  ];
  constructor(
              private iab: InAppBrowser,
              private dataService: DataService
              ) { }

  ngOnInit() {
  }

  openLink(url: string, name: string, type: string) {
    if (type === 'open') {
    const browser = this.iab.create(url, '_blank');
    console.log('hdkajshdkajh');
    } else {
      console.log('URL: ' + url +  '  NAME: ' + name);
      this.dataService.download(url, name);
    }
  }

}
