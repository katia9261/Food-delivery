import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { HeaderComponent } from './auth/components/header/header.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent} from './auth/components/verify-email/verify-email.component'
// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { MenuComponent } from './auth/components/menu/menu.component';
import { InfoProductComponent } from './auth/components/info-product/info-product.component';
import { CartPageComponent } from './auth/components/cart-page/cart-page.component';
import { SendFormComponent } from './auth/components/send-form/send-form.component';
import { HomePageComponent } from './auth/components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home-page', component: HomePageComponent , canActivate: [AuthGuard]},
  { path: 'menu', component:  MenuComponent },
  { path:'search/:searchItem', component: MenuComponent},
  {path: 'tag/:tag', component: MenuComponent },
  {path: 'food/:id', component: InfoProductComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'send-form', component: SendFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule {}
