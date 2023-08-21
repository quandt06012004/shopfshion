import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ShopComponent } from './layout/shop/shop.component';
import { ContactComponent } from './layout/contact/contact.component';
import { BlogComponent } from './layout/blog/blog.component';
import { BlogDetailComponent } from './layout/blog-detail/blog-detail.component';
import { AboutComponent } from './layout/about/about.component';
import { SignInComponent } from './layout/sign-in/sign-in.component';
import { CartComponent } from './layout/cart/cart.component';

const routes: Routes = [
  { path:"", component: HomeComponent},
  {path: "shop", component: ShopComponent},
  {path: "contact", component: ContactComponent},
  {path: "blog", component: BlogComponent},
  {path: "blog-detail", component: BlogDetailComponent},
  {path: "about", component: AboutComponent},
  {path: "cart", component: CartComponent},
  {path: "sign-in", component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
