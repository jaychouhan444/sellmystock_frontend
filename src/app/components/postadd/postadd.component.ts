import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.component.html',
  styleUrls: ['./postadd.component.css']
})
export class PostaddComponent implements OnInit {
  fileone: any;
  filetwo: any;
  filethree: any;
  filefour: any;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.checkForToken();
    this.checkForLoginToka();
  }

  checkForToken() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['login']);
    }

  }

  checkForLoginToka() {
    if (localStorage.getItem('login-toka')) {
      localStorage.removeItem('login-toka')
      location.reload();
    }
  }

  addPost(value) {

    console.log("clicked on add post")
    
    console.log(JSON.stringify(value));
    let result;
    
    this.http.post("http://192.168.0.110:9001/submitAd", JSON.stringify(value))
    .subscribe(response => {
        console.log("Respone after submitting form")
        console.log(response.json());
        result = response.json();
        console.log(result.suc._id);     
        this.uploadImage(result.suc._id);

      });
      
  }
  
  uploadImage(id){

const fd = new FormData();
    fd.append('adId', id);
    fd.append('FileList', this.fileone);
    fd.append('FileList', this.filetwo);
    fd.append('FileList', this.filethree);
    fd.append('FileList', this.filefour);

    console.log("final file data");
    console.log(fd);

    this.http.post("http://192.168.0.110:9001/upload", fd)
    .subscribe(response => {
        console.log("Respone after submitting form")
        console.log(response.json());
        console.log("upload mar diya");
      })

  }

  onImageUpload(event: any) {

    this.fileone = event.target.files[0];
    console.log(this.fileone);

    this.filetwo = event.target.files[1];
    console.log(this.filetwo);

    this.filethree = event.target.files[2];
    console.log(this.filethree);

    this.filefour = event.target.files[3];
    console.log(this.filefour);

    console.log("Charo image upload hoi gyae");
  }


}


