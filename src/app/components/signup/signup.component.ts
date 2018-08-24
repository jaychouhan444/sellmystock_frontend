import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  register(value) {
    console.log(JSON.stringify(value));
    this.http.post('http://192.168.0.110:9001/RegisterUser/insert', JSON.stringify(value))
    .subscribe(Response => {
      console.log(Response);
    });
  }
}
