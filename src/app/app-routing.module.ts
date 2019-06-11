import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
<<<<<<< HEAD
  { path: 'course', loadChildren: './pages/course/course.module#CoursePageModule' },  { path: 'dashboard3', loadChildren: './pages/dashboard3/dashboard3.module#Dashboard3PageModule' }
=======
  { path: 'course', loadChildren: './pages/course/course.module#CoursePageModule' },  { path: 'lesson', loadChildren: './pages/lesson/lesson.module#LessonPageModule' }
>>>>>>> develop

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
