import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-photo-profile',
  templateUrl: './photo-profile.page.html',
  styleUrls: ['./photo-profile.page.scss'],
})
export class PhotoProfilePage implements OnInit {


constructor(private camera: Camera) { }

takePicture() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  this.camera.getPicture(options).then((imageData) => {
    console.log("Camera successful: ");

  }, (err) => {
   // Handle error
   console.log("Camera issue: " + err);
  });
}

  ngOnInit() {
  }

}
