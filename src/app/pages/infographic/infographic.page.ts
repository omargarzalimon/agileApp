import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

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
    private document: DocumentViewer,
    private pv: PhotoViewer
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

   //View photo with sharing option
   viewPhoto(){
    const imageName = 'SCRUMMethodology.png';
    if (this.platform.is('ios')) {
      const ROOT_DIRECTORY = this.file.documentsDirectory;
      const downloadFolderName = 'tempDownloadFolder';
      this.file.checkDir(this.file.documentsDirectory, 'tempDownloadFolder').then(
        response => {
          console.log(response);
          if (response === true) {
            this.pv.show(ROOT_DIRECTORY + downloadFolderName + '/' + imageName);
          } else {
            this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
            .then((entries) => {
              // Copy our asset/img/logo.jpg to folder we created
              this.file.copyFile(this.file.applicationDirectory + 'www/assets/imgs/lesson/',
              imageName, ROOT_DIRECTORY + downloadFolderName + '/', imageName)
                .then((entries) => {
                  this.pv.show(ROOT_DIRECTORY + downloadFolderName + '/' + imageName);
                 })
                .catch((error) => {
                  alert('1 error ' + JSON.stringify(error));
                  this.pv.show(ROOT_DIRECTORY + downloadFolderName + '/' + imageName);
                });
            })
            .catch((error) => {
              alert('2 error' + JSON.stringify(error));
            });
          }
        }
      ).catch(err => {
        console.log(JSON.stringify(err));
      });
    } else if (this.platform.is('android')) {
      const ROOT_DIRECTORY = this.file.dataDirectory;
      const downloadFolderName = 'tempDownloadFolder';
      console.log(this.file.applicationStorageDirectory);
      console.log(this.file.applicationDirectory);
      console.log(this.file.documentsDirectory);
      console.log(this.file.dataDirectory);
      this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then((entries) => {
        // Copy our asset/img/logo.jpg to folder we created
        this.file.copyFile(this.file.applicationDirectory + 'www/assets/imgs/lesson/',
        imageName, ROOT_DIRECTORY + downloadFolderName + '/', imageName)
          .then((entries) => {
            this.pv.show(ROOT_DIRECTORY + downloadFolderName + '/' + imageName);
            })
          .catch((error) => {
            alert('1 error ' + JSON.stringify(error));
            this.pv.show(ROOT_DIRECTORY + downloadFolderName + '/' + imageName);
          });
      })
      .catch((error) => {
        alert('2 error' + JSON.stringify(error));
      });
    }
  }

}
