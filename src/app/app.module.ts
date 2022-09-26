import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/components/verify-email/verify-email.component';
import { AuthService } from './auth/shared/services/auth.service';
import { HeaderComponent } from './auth/components/header/header.component';
import { MenuComponent } from './auth/components/menu/menu.component';
import { SearchComponent } from './auth/components/search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './auth/components/tags/tags.component';
import { CartPageComponent } from './auth/components/cart-page/cart-page.component';
import { InfoProductComponent } from './auth/components/info-product/info-product.component';
import { ProblemSearchComponent } from './auth/components/problem-search/problem-search.component';
import { HomePageComponent } from './auth/components/home-page/home-page.component';
import { SendFormComponent } from './auth/components/send-form/send-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from './auth/components/services/services.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HeaderComponent,
    MenuComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    InfoProductComponent,
    ProblemSearchComponent,
    HomePageComponent,
    SendFormComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],

  providers: [AuthService, ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
