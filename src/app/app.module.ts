import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { StaffComponent } from './pages/about/staff/staff.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { MenusComponent } from './pages/menus/menus.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { GalleryComponent } from './pages/about/gallery/gallery.component';
import { TestimonialsComponent } from './pages/home/testimonials/testimonials.component';
import { MenuDetailsComponent } from './pages/menus/menu-details/menu-details.component';
import { CutTextPipe } from './shared/pipes/cut-text.pipe';
import { StaffTitlePipe } from './shared/pipes/staff-title.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layouts/layout/layout.component';
import { MealsByCategoryComponent } from './pages/menus/meals-by-category/meals-by-category.component';

const routes: Routes = [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "reservation",
        component: ReservationsComponent,
      },
      {
        path: "menu",
        component: MenusComponent,
      },
      {
        path: 'menu/:id',
        component: MenuDetailsComponent
      },
      {
        path: 'category/:category',
        component: MealsByCategoryComponent,
        pathMatch: "full"
      },
      {
        path: "contact",
        component: ContactComponent,
      },
      {
        path: "**",
        component: NotFoundComponent,
      }
    ]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ReservationsComponent,
    MenusComponent,
    NotFoundComponent,
    SliderComponent,
    GalleryComponent,
    StaffComponent,
    TestimonialsComponent,
    MenuDetailsComponent,
    CutTextPipe,
    StaffTitlePipe,
    MealsByCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    // SharedModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [StaffTitlePipe,CutTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
