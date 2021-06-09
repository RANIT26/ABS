import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Main/login/login.component';
import { HomepageComponent } from './Main/homepage/homepage.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContentLandingPageComponent } from './Main/content-landing-page/content-landing-page.component';



const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'content1', component: ContentLandingPageComponent},
  { path: '',redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
