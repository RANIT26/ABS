import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Main/homepage/homepage.component';
import { LoginComponent } from './Main/login/login.component';

const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: '',redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
