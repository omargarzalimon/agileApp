import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'course', loadChildren: './pages/course/course.module#CoursePageModule' },
  { path: 'dashboard3', loadChildren: './pages/dashboard3/dashboard3.module#Dashboard3PageModule' },
  { path: 'lesson', loadChildren: './pages/lesson/lesson.module#LessonPageModule' },
  { path: 'videos', loadChildren: './pages/videos/videos.module#VideosPageModule' },
  { path: 'exercise', loadChildren: './pages/exercise/exercise.module#ExercisePageModule' },
  { path: 'infographic', loadChildren: './pages/infographic/infographic.module#InfographicPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'glossary', loadChildren: './pages/glossary/glossary.module#GlossaryPageModule' },
  { path: 'photo-profile', loadChildren: './pages/photo-profile/photo-profile.module#PhotoProfilePageModule' },
  { path: 'privacy-policy', loadChildren: './pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}