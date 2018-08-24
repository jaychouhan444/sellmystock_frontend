
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, Headers } from '@angular/http';

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider  } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostaddComponent } from './components/postadd/postadd.component';
import { SearchComponent } from './search/search.component';
import { AddDetailComponent } from './components/add-detail/add-detail.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('179797231822-1o28qge9km1fg2fgi78qgn355lj4vn40.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('466577440440353')
  },
  
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CategoriesComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    PostaddComponent,
    SearchComponent,
    AddDetailComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'add-details/:id', component: AddDetailComponent },
      { path: 'post-add', component: PostaddComponent },
      { path: 'change-password', component: ForgotPasswordComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
