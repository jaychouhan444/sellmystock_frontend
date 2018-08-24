import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loginStatus = false;
  loginButtonBoolean = true;
  constructor(private router:Router) { }

  ngOnInit() {
    this.checkForLoginToken();
  }
  
  checkForLoginToken() {
    if(localStorage.getItem('token'))
    {
      this.loginStatus = true;
      this.loginButtonBoolean = false;
    }

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
    console.log('token has been destoryed form localtorage ');
    this.loginStatus = false;
    this.loginButtonBoolean = true;
  }
}
