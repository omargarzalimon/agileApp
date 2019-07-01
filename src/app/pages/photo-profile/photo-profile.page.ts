import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-profile',
  templateUrl: './photo-profile.page.html',
  styleUrls: ['./photo-profile.page.scss'],
})
export class PhotoProfilePage implements OnInit {
  foto: any;
  userId;
  public jsonphoto;
  fotoc: Observable<any>;
  usuario: Observable<any>;
  constructor(private camera: Camera, private dataService: DataService, private storage: Storage, private loadingController: LoadingController, private router: Router) {
    this.storage.get('id').then((val) => {
      this.userId = val;
      this.usuario = this.dataService.getProfileById(this.userId);
    });
  }
   
  hacerFoto() {
    const options: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  acceptPhoto(){
    this.presentLoading();
    this.dataService.postImage(this.userId,this.foto)
    .subscribe(console.log);
  }

  declinePhoto(){
    this.router.navigate(['/profile']);
  }

  ngOnInit() {
    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Uploading...',
      duration: 5000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    location.replace('/profile');
    //this.router.navigate(['/profile']);
  }


}

