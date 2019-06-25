import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-photo-profile',
  templateUrl: './photo-profile.page.html',
  styleUrls: ['./photo-profile.page.scss'],
})
export class PhotoProfilePage implements OnInit {
  foto: any;
  public jsonphoto;
  constructor(private camera: Camera, private dataService: DataService ) {}
   
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
    this.jsonphoto = [
    {
     photo: this.foto
    }
    ];
    this.dataService.postImage(this.jsonphoto);
  }

  ngOnInit() {
  }

}
