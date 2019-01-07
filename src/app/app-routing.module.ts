import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 跳頁需要到此進行添加
// 格式  { path: 'A', loadChildren: 'app/A/A.module#AModule'},  
// 將 A 的部分改成你所新創建的 route 
const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'post', loadChildren: './post/post.module#PostModule' },
  { path: 'profile', loadChildren: './profile/profile.module#profileModule'},
  { path: 'courses', loadChildren: './courses/courses.module#coursesModule'},
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
