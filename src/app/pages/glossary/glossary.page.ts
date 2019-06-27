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
          link: {
            url: 'https://www.charlesgym.com.mx/agile/AGILE.pdf',
            name: 'AgilePDF',
            type: '.pdf'
          }
        },
        {
          icon: 'link',
          text: 'Consectetur adipiscing elit',
          color: 's1',
          link: {
            url: 'https://www.charlesgym.com.mx/agile/PortadaAgile_1.mp4',
            name: 'MP4',
            type: '.mp4'
          }
        },
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1',
          link: {
            url: 'https://www.charlesgym.com.mx/agile/AGILE-%20induccion%20_all%202.0.pptx',
            name: 'PPTX',
            type: '.pptx'
          }
        }
      ]
    },
    {
      unit: [
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1',
          link: {
            url: 'https://www.charlesgym.com.mx/agile/GB%20phase%201.docx',
            name: 'DOCX',
            type: '.docx'
          }
        },
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1',
          link: {
            url: 'https://www.charlesgym.com.mx/agile/fondoagile.png',
            name: 'PNG',
            type: '.png'
          }
        },
        {
          icon: 'link',
          text: 'Consectetur adipiscing elit',
          color: 's1',
          link: {
            url: 'https://www.charlesgym.com.mx/agile/DefineSummary.jpg',
            name: 'JPG',
            type: '.jpg'
          }
        },
        {
          icon: 'link',
          text: 'Consectetur adipiscing elit',
          color: 's1',
          link: {
            url: 'https://www.charlesgym.com.mx/agile/Minitab%20ejercicio%20controltab.zip',
            name: 'ZIP',
            type: '.zip'
          }
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
      this.dataService.download(url, name, type);
    }
  }

}
