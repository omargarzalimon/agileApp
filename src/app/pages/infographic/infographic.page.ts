import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-infographic',
  templateUrl: './infographic.page.html',
  styleUrls: ['./infographic.page.scss'],
})
export class InfographicPage implements OnInit {

  constructor(
    private platform: Platform,
    private file: File,
    private ft: FileTransfer,
    private fileOpener: FileOpener,
    private document: DocumentViewer
  ) { }

  ngOnInit() {
  }

  openPNG() {
    // this.file.applicationStorageDirectory+"www/assets/imgs/lesson/SCRUMMethodology.png";
    // this.photoViewer.show(", 'My image title', {share: false});
    // const filePath = this.file.applicationDirectory + 'www/assets/imgs/lesson/';
    // console.log(filePath);
    // if (this.platform.is('android')) {
    //   const fakeName = Date.now();
    //   this.file.copyFile(filePath, 'SCRUMMethodology.png', this.file.dataDirectory, `${fakeName}.png`).then(result => {
    //     this.fileOpener.open(result.nativeURL, 'image/png')
    //       .then(() => console.log('File is opened'))
    //       .catch(e => console.log('Error opening file', e));
    //   });
    // } else {
    //   // Use Document viewer for iOS for a better UI
    //   const options: DocumentViewerOptions = {
    //     title: 'My PNG'
    //   };
    //   console.log(filePath);
    //   this.document.viewDocument(`${filePath}/SCRUMMethodology.png`, 'image/png', options);
      // this.document.viewDocument('www/assets/imgs/lesson//SCRUMMethodology.png', 'image/png', options);
    // }
  }

}
