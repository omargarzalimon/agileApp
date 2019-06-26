import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fileTransfer: FileTransferObject;
  constructor(
              private http: HttpClient,
              private fileOpener: FileOpener,
              private transfer: FileTransfer,
              private file: File,
              private platform: Platform,
              private document: DocumentViewer
              ) { }
  getProfileById() {
    return this.http.get('http://gmodelo.freevar.com/agile/vendor/slim/slim/getProfile/1');
  }
  download(downloadUrl: string, title: string) {
    const url = this.file.dataDirectory + title + '.pdf';
    if (this.platform.is('ios')) {
      this.file.checkFile(this.file.dataDirectory, title + '.pdf').then( (files) => {
        console.log('EXISTIA');
        this.document.viewDocument(url, 'application/pdf', {});
      }).catch((err) => {
        console.log('NO EXISTEEE');
        this.fileTransfer = this.transfer.create();
        this.fileTransfer
        .download(downloadUrl, this.file.dataDirectory + title + '.pdf')
        .then(entry => {
          console.log('download complete: ' + entry.toURL());
          // const url = entry.toURL();
          this.document.viewDocument(url, 'application/pdf', {});
        });
      });
    } else {
      this.fileTransfer = this.transfer.create();
      this.fileTransfer
      .download(downloadUrl, this.file.dataDirectory + title + '.pdf')
      .then(entry => {
        console.log('download complete: ' + entry.toURL());
        this.fileOpener.open(url, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      });
    }
  }
}
