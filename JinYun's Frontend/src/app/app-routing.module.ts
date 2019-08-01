import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';
import { ReviewComponent } from './components/review/review.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path:'home',//like url pattern
    component:HomeComponent
  },
  {
    path:'',//like url pattern
    component:HomeComponent
  },

  {
    path:'profile',//like url pattern
    component:ProfileComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'signup',
    component:SignupComponent
  },

  {
    path:'blog',//like url pattern
    component:BlogComponent
  },

  {
    path:'contact',//like url pattern
    component:ContactComponent
  },

  {
    path:'create',
    component:CreateComponent
  },

  {
    path:'view',
    component:ViewComponent
  },

  {
    path:'review',
    component:ReviewComponent
  }

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
