import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'course', loadChildren: './pages/course/course.module#CoursePageModule' },  { path: 'lesson', loadChildren: './pages/lesson/lesson.module#LessonPageModule' },
  { path: 'infographic', loadChildren: './pages/infographic/infographic.module#InfographicPageModule' },
  { path: 'exercise', loadChildren: './pages/exercise/exercise.module#ExercisePageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
