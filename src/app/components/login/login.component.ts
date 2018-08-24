import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  credenAuth;
  wrongCred = false;
  user: SocialUser;
  emailId;
  type;
  name;

  constructor(private http: Http, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    
  }

  Redirectsignup() {
    this.router.navigate(['signup']);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      if(this.user){
        this.fbloginInsert(this.user.name, this.user.email);
      }
    
    });
  }

  signOut(): void {
    this.authService.signOut();
  }
  
  login(credentials) {
    console.log(credentials);
    this.http.post('http://192.168.0.110:9001/UserLogin', JSON.stringify(credentials))
      .subscribe(response => {
        const result = response.json();
        console.log(result);
        console.log(result.token);
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          // localStorage.setItem('e-mail', result.emailId);
          localStorage.setItem('login-toka', result.token);
          console.log('token set hua');
          this.router.navigate(['post-add']);
        } else {
          this.wrongCred = true;
        }
        if (result.token) {
          this.credenAuth = true;
        }

      });

  }

  fbloginInsert(name, email) {
console.log(name);
console.log(email);
  
const jsonstr = '{"name":"' + name + '","emailId":"' + email + '","type":"F"}';
    
console.log(jsonstr);
    
    this.http.post('http://192.168.0.110:9001/RegisterUser/insert', jsonstr)
    .subscribe(response => {
      console.log(response.json());
      const result = response.json();
        console.log(result);
        console.log(result.token);
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          localStorage.setItem('login-toka', result.token);
          console.log('token set hua');
          this.router.navigate(['post-add']);
        } else {
          this.wrongCred = true;
        }
        if (result.token) {
          this.credenAuth = true;
        }

    });
}

  

}
