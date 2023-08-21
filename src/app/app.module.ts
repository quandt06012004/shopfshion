import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { ShopComponent } from './layout/shop/shop.component';
import { ContactComponent } from './layout/contact/contact.component';
import { BlogComponent } from './layout/blog/blog.component';
import { BlogDetailComponent } from './layout/blog-detail/blog-detail.component';
import { AboutComponent } from './layout/about/about.component';
import { SignInComponent } from './layout/sign-in/sign-in.component';
import { CartComponent } from './layout/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    BlogComponent,
    BlogDetailComponent,
    AboutComponent,
    SignInComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
