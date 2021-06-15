import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import {HomeComponent} from './home/home.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {ContactComponent} from './contact/contact.component' 
import { DoctorsComponent } from './doctors/doctors.component';
import { TeamComponent } from './team/team.component';
// import { deprecate } from 'node:util';
import { DepartmentComponent } from './department/department.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { PricingComponent } from './pricing/pricing.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ReviewComponent } from './review/review.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'component1',
    component:  Component1Component
},
{
  path: 'home',
  component:  HomeComponent
},
{
  path: 'aboutus',
  component:  AboutusComponent
},
{
  path: 'appointment',
  component: AppointmentComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'doctors',
  component: DoctorsComponent
},
{
  path: 'team',
  component: TeamComponent
},
{
  path: 'department',
  component: DepartmentComponent
},
{
  path: 'testimonials',
  component: TestimonialsComponent
},
{
  path: 'facilities',
  component: FacilitiesComponent
},
{
  path: 'pricing',
  component: PricingComponent
},
{
  path: 'gallary',
  component: GallaryComponent
},
{
  path: 'blogs',
  component: BlogsComponent
},
{
  path: 'review',
  component: ReviewComponent
},
{
  path: 'location',
  component: LocationComponent
},
{path: 'login',
component: LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
