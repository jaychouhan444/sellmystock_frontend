import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {

  // OLDpASSWORDtxt;
  // NEWpASSWORDtxt;

  trailDisBool = false;

  emailtxt;
  passtxt;
  otptxt;

  emailInputBool = true;
  otpInputBool = false;
  passInputBool = false;


  emailBtnBool = true;
  otpBtnBool = false;
  passwordBtnBool = false;

  otp;
  newapss;
  id;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  passwordChange() {

    // console.log(this.OLDpASSWORDtxt);
    // console.log(this.NEWpASSWORDtxt);
    // const jsonstr = '{"oldPassword":"' + this.OLDpASSWORDtxt + '","newPassword":"' + this.NEWpASSWORDtxt + '"}';
    // console.log(jsonstr);
    // this.http.post('http://192.168.0.110:9001/password/4/passwordupdatefornonblank', jsonstr)
    // .subscribe(response => {
    //   console.log(response);
    // });

    const jsonstr = '{"emailId":"' + this.emailtxt + '"}';
    console.log(jsonstr);

    this.http.post('http://192.168.0.110:9001/resetPassword', jsonstr)
      .subscribe(response => {
        console.log(response);
      });

  }

  submitEmail() {

    const jsonstr = '{"emailId":"' + this.emailtxt + '"}';
    console.log(jsonstr);

    this.http.post('http://192.168.0.110:9001/resetPassword', jsonstr)
      .subscribe(response => {
        console.log(response.json());
        var result = response.json();
        console.log(result.doc.userId);
        console.log(result.doc.otp);
        this.id = result.doc.userId;
        this.otp = result.doc.otp;
      });


    this.emailInputBool = false;
    this.otpInputBool = true;
    this.passInputBool = false;


    this.emailBtnBool = false;
    this.otpBtnBool = true;
    this.passwordBtnBool = false;
  }

  submitOTP() {

    const jsonstr = '{"id":"' + this.id + '","otp":"' + this.otptxt + '"}';
    console.log(jsonstr);

    this.http.post('http://192.168.0.110:9001/resetPassword/otpVerification', jsonstr)
      .subscribe(response => {
        console.log(response.json());
        var result = response.json();

      });

    this.emailInputBool = false;
    this.otpInputBool = false;
    this.passInputBool = true;


    this.emailBtnBool = false;
    this.otpBtnBool = false;
    this.passwordBtnBool = true;
  }

  newPasswordSubmit() {


    const jsonstr = '{"id":"' + this.id + '","password":"' + this.passtxt + '"}';
    console.log(jsonstr);

    this.http.post('http://192.168.0.110:9001/resetPassword/setPassword', jsonstr)
      .subscribe(response => {
        console.log(response.json());
        var result = response.json();

      });


    this.emailInputBool = true;
    this.otpInputBool = false;
    this.passInputBool = false;


    this.emailBtnBool = true;
    this.otpBtnBool = false;
    this.passwordBtnBool = false;
  }

}
