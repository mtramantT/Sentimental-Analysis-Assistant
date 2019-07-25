import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';
import { ReviewComponent } from './components/review/review.component';


const routes: Routes = [
  {
    path:'home',//like url pattern
    component:HomeComponent
  },

  {
    path:'profile',//like url pattern
    component:ProfileComponent
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
