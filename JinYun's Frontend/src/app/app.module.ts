import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import {ChartsModule}from'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';
import { ReviewComponent } from './components/review/review.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    BlogComponent,
    ContactComponent,
    CreateComponent,
    ViewComponent,
    ReviewComponent
    //
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
