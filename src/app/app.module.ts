import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { LoginComponent } from './Main/login/login.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomepageComponent } from './Main/homepage/homepage.component';

// Services
import { GlobalServicesService } from './services/global-services.service';

//Angular material imports
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ContentLandingPageComponent } from './Main/content-landing-page/content-landing-page.component';
import { InputFormContentComponent } from './Main/input-form-content/input-form-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ContentLandingPageComponent,
    InputFormContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [GlobalServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
