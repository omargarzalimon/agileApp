import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhotoProfilePage } from './photo-profile.page';
import { ComponentsModule } from '../../components/components.module';
import { Camera } from '@ionic-native/camera/ngx';
const routes: Routes = [
  {
    path: '',
    component: PhotoProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  providers:[
    Camera
  ],
  declarations: [PhotoProfilePage]
})
export class PhotoProfilePageModule {}
