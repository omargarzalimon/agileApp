import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fileTransfer: FileTransferObject;
  mime: string;
  private jphoto;
  constructor(
              private http: HttpClient,
              private fileOpener: FileOpener,
              private transfer: FileTransfer,
              private file: File,
              private platform: Platform,
              private document: DocumentViewer
              ) { }
  getProfileById(){
    return this.http.get('https://www.charlesgym.com.mx/agile/vendor/slim/slim/getProfile/1');
  }
  postImage(photoshida){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.jphoto = {
      "photo" : photoshida ,
    };
    console.log(photoshida);
    return this.http.post('https://www.charlesgym.com.mx/agile/vendor/slim/slim/postImage',JSON.stringify(this.jphoto));
  }
  download(downloadUrl: string, title: string, type: string) {
    const mime = this.checkMIME(type);
    const url = this.file.dataDirectory + title + type;
    if (this.platform.is('ios')) {
      this.file.checkFile(this.file.dataDirectory, title + type).then( (files) => {
        console.log('EXISTIA');
        if (type === '.pdf') {
          this.document.viewDocument(url, mime, {});
        } else {
          this.fileOpener.open(url, mime)
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
        }
        // this.document.viewDocument(url, mime, {});
      }).catch((err) => {
        console.log('NO EXISTEEE');
        this.fileTransfer = this.transfer.create();
        this.fileTransfer
        .download(downloadUrl, this.file.dataDirectory + title + type)
        .then(entry => {
          console.log('download complete: ' + entry.toURL());
          // const url = entry.toURL();

          if (type === '.pdf') {
            this.document.viewDocument(url, mime, {});
          } else {
            this.fileOpener.open(url, mime)
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e));
          }
        });
      });
    } else {
      this.fileTransfer = this.transfer.create();
      this.fileTransfer
      .download(downloadUrl, this.file.dataDirectory + title + type)
      .then(entry => {
        console.log('download complete: ' + entry.toURL());
        this.fileOpener.open(url, mime)
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      });
    }


    // const url = this.file.dataDirectory + title + '.pdf';
    // if (this.platform.is('ios')) {
    //   this.file.checkFile(this.file.dataDirectory, title + '.pdf').then( (files) => {
    //     console.log('EXISTIA');
    //     this.document.viewDocument(url, 'application/pdf', {});
    //   }).catch((err) => {
    //     console.log('NO EXISTEEE');
    //     this.fileTransfer = this.transfer.create();
    //     this.fileTransfer
    //     .download(downloadUrl, this.file.dataDirectory + title + '.pdf')
    //     .then(entry => {
    //       console.log('download complete: ' + entry.toURL());
    //       // const url = entry.toURL();
    //       this.document.viewDocument(url, 'application/pdf', {});
    //     });
    //   });
    // } else {
    //   this.fileTransfer = this.transfer.create();
    //   this.fileTransfer
    //   .download(downloadUrl, this.file.dataDirectory + title + '.pdf')
    //   .then(entry => {
    //     console.log('download complete: ' + entry.toURL());
    //     this.fileOpener.open(url, 'application/pdf')
    //       .then(() => console.log('File is opened'))
    //       .catch(e => console.log('Error opening file', e));
    //   });
    // }
  }

  checkMIME(extn: string) {

    const ext = extn.toLowerCase();
    const MIMETypes = {
      '.pdf': 'application/pdf',
      '.png' : 'image/png',
      '.jpg' : 'image/jpeg',
      '.jpeg' : 'image/jpeg',
      '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      '.doc' : 'application/msword',
      '.ppt' : 'application/vnd.ms-powerpoint',
      '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      '.xls' : 'application/vnd.ms-excel',
      '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      '.zip' : 'application/zip',
      '.mp4' : 'video/mp4'
    };

    // this.mime = '';
    // if (ext === '.pdf') {
    //   this.mime = 'application/pdf';
    // } else if (ext === '.png') {
    //   this.mime = 'image/png';
    // } else if (ext === '.jpg' || ext === '.jpeg') {
    //   this.mime = 'image/jpeg';
    // } else if (ext === '.doc') {
    //   this.mime = 'application/msword';
    // } else if (ext === '.docx') {
    //   this.mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    // } else if (ext === '.ppt') {
    //   this.mime = 'application/vnd.ms-powerpoint';
    // } else if (ext === '.pptx') {
    //   this.mime = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    // } else if (ext === '.xls') {
    //   this.mime = 'application/vnd.ms-excel';
    // } else if (ext === '.xlsx') {
    //   this.mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    // } else if (ext === '.zip') {
    //   this.mime = 'application/zip';
    // } else if (ext === '.mp4') {
    //   this.mime = 'video/mp4';
    // }
    return MIMETypes[ext];
  }
}
