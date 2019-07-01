import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { ComponentsModule } from '../../components/components.module';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfilePage } from '../profile/profile.page';
import { IonicStorageModule } from '@ionic/storage';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
