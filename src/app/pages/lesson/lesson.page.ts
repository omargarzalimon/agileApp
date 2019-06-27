import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {
  public items: any = [];


  constructor(
    private platform: Platform,
    private file: File,
    private ft: FileTransfer,
    private fileOpener: FileOpener,
    private document: DocumentViewer,
    private tts: TextToSpeech
    ) {
      this.items = [
        { expanded: false ,
          nombre: 'Module 1',
          unidades: [
            { expanded: false,
              name: 'Unit 1',
              content: [
                {
                  icon: 'document',
                  title: 'Morbi accumsan ultrices arcu',
                  color: 's1',
                  route: '/lesson'
                },
                {
                  icon: 'videocam',
                  title: 'Donec quis enim sagittis',
                  color: 's6',
                  route: '/videos'
                },
                {
                  icon: 'logo-game-controller-b',
                  title: 'Integer iaculis justo eget',
                  color: 's7',
                  route: '/exercise'
                },
                {
                  icon: 'image',
                  title: 'Lorem ipsum dolor sit amet',
                  color: 'm2',
                  route: '/infographic'
                },
                {
                  icon: 'document',
                  title: 'Nunc gravida pulvinar urna',
                  color: 's3',
                  route: '/login'
                }
              ]
            },
            { expanded: false,
              name: 'Unit 2',
              content: [
                {
                  icon: 'document',
                  title: 'Morbi accumsan ultrices arcu',
                  color: 's1'
                }
              ]
            }
          ]
        },
        { expanded: false,
          nombre: 'Module 2',
          unidades: [
            {
              name: 'Unit 1',
              content: [
                {
                  icon: 'document',
                  title: 'Morbi accumsan ultrices arcu',
                  color: 's1'
                },
                {
                  icon: 'videocam',
                  title: 'Morbi accumsan ultrices arcu',
                  color: 's1'
                }
              ]
            },
            {
              name: 'Unit 2',
              content: [
                {
                  icon: 'document',
                  title: 'Morbi accumsan ultrices arcu',
                  color: 's1'
                }
              ]
            }
          ] },
          { expanded: false,
            nombre: 'Module 3',
            unidades: [
              {
                name: 'Unit 1',
                content: [
                  {
                    icon: 'document',
                    title: 'Morbi accumsan ultrices arcu',
                    color: 's1'
                  },
                  {
                    icon: 'videocam',
                    title: 'Morbi accumsan ultrices arcu',
                    color: 's1'
                  }
                ]
              },
              {
                name: 'Unit 2',
                content: [
                  {
                    icon: 'document',
                    title: 'Morbi accumsan ultrices arcu',
                    color: 's1'
                  }
                ]
              }
            ]}
      ];
     }


public TTS = [
    {
    campo: 'ID',
     data: '32171040'
    },
    {
      campo: 'text',
// tslint:disable-next-line: max-line-length
       data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra metus tempor libero malesuada, at eleifend erat auctor. Suspendisse viverra tincidunt finibus. Integer iaculis justo eget aliquam ullamcorper. Suspendisse mattis ante in tristique luctus. Vivamus porttitor maximus arcu. Proin vestibulum ac sem nec dictum. Mauris lacinia leo eu luctus eleifend. In a lobortis dui, sed imperdiet ligula. Donec quis enim sagittis, semper metus et, pulvinar ex. Nulla'
    },
  ];



  playText(data) {
    console.log(data);
    this.tts.speak({
      text: data,
      locale: 'es-MX',
      rate: 1
    }).then ((res) => console.log('finalizado'))
    .catch((err) => console.log(err));
  }

  ngOnInit() {
    this.tts.speak('');
    document.getElementById('resume').style.color = 'var(--ion-color-m1)';
    document.getElementById('resume').style.borderBottom = 'var(--ion-color-m1) 1px solid';




  }

  ionViewWillLeave() {
    this.tts.speak('');

  }

   ngOnDestroy() {
     this.tts.speak('');

   }

  openPDF() {
    let filePath = this.file.applicationDirectory + 'www/assets/';

    if (this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, 'AGILE.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      });
    } else {
      // Use Document viewer for iOS for a better UI
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      };
      this.document.viewDocument(`${filePath}/AGILE.pdf`, 'application/pdf', options);
    }
  }

  downloadPDF() {
    const downloadUrl = 'https://elearningtest2019.000webhostapp.com/AGILE.pdf';
    const path = this.file.dataDirectory;
    const transfer = this.ft.create();
    transfer.download(downloadUrl, path + 'myfile.pdf').then(entry => {
      const url = entry.toURL();
      if (this.platform.is('ios')) {
        this.document.viewDocument(url, 'application/pdf', {});
      } else {
        this.fileOpener.open(url, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      }
    });
  }

 clicktab(tab) {
  this.tts.speak('');
  document.getElementById('resume').style.borderBottom = 'none';
  document.getElementById('course').style.borderBottom = 'none';
  document.getElementById('foroum').style.borderBottom = 'none';
  document.getElementById('resume').style.color = 'var(--ion-color-base)';
  document.getElementById('course').style.color = 'var(--ion-color-base)';
  document.getElementById('foroum').style.color = 'var(--ion-color-base)';
  document.getElementById(tab).style.borderBottom = 'var(--ion-color-m1) 1px solid';
  document.getElementById(tab).style.color = 'var(--ion-color-m1)';
  document.getElementById('divresume').style.display = 'none';
  document.getElementById('divcourse').style.display = 'none';
  document.getElementById('divforoum').style.display = 'none';

  document.getElementById('div' + tab).style.display = 'inline-block';



 }

 expandItem(item): void {
  if (item.expanded === true) {
    item.expanded = false;
  } else {
      this.items.map(listItem => {
      if (item === listItem) {
          listItem.expanded = true;
        } else {
          listItem.expanded = false;
        }
      return listItem;
     });
  }
}

expandItem3(item, i, unidad): void {
  if (item.expanded === true) {
    item.expanded = false;

    if (unidad.expanded === true) {
      unidad.expanded = false;
    } else {
      this.items[i].unidades.map(listItem => {
        if (unidad === listItem) {
        listItem.expanded = true;
      } else {
          listItem.expanded = false;
         }
        return listItem;
       });
    }


  } else {
    this.items.map(listItem => {
    if (item === listItem) {
        listItem.expanded = true;
      } else {
        listItem.expanded = false;
      }
    return listItem;
   });

  }

}
}
