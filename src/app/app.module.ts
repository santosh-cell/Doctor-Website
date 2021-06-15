import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { TeamComponent } from './team/team.component';
import { DepartmentComponent } from './department/department.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { PricingComponent } from './pricing/pricing.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ReviewComponent } from './review/review.component';
import { LocationComponent } from './location/location.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    AboutusComponent,
    AppointmentComponent,
    ContactComponent,
    DoctorsComponent,
    TeamComponent,
    DepartmentComponent,
    FacilitiesComponent,
    PricingComponent,
    GallaryComponent,
    BlogsComponent,
    ReviewComponent,
    LocationComponent,
    TestimonialsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
