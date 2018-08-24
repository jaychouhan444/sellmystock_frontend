import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      console.log(params);

      let parameters = params.get('id');
     console.log(parameters);
        
     console.log(parameters);
     const jsonstr = '{"id":"' + parameters + '"}';
      console.log(jsonstr);
        this.http.post('http://192.168.0.110:9001/submitAd/findAdById', jsonstr)
        .subscribe(response => {
          console.log(response);
        });
    });
  }

}
