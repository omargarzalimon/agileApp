import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LessonPage } from './lesson.page';
import { ExpandableComponent } from '../../components/expandable/Expandable.Component';



const routes: Routes = [
  {
    path: '',
    component: LessonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LessonPage,ExpandableComponent]
})
export class LessonPageModule {}
