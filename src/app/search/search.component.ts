import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  table;
  showPosition;
  cityOption;
  answertXT;
  searchResultBool = false;
  resultArray: any;
  constructor(private http: Http) { }
  

  ngOnInit() {
    this.findMe();
    this.showTable();
  }
  
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.showPosition(position);
        console.log(position);
        
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showTable() {
    this.http.get('http://192.168.0.110:9001/city/2/cityFind')
      .subscribe(response => {
        console.log(response.json());
        const result = response.json();
        this.table = result.doc;
        console.log(this.table);
      });
  }


  searchResult(values) {
    console.log("Result search kare ke liye aaya");
    console.log(this.answertXT);
    console.log(this.cityOption);

    const jsonstr = '{"city":"' + this.cityOption + '","text":"' + this.answertXT + '"}';
    console.log(jsonstr);
    
    this.http.post('http://192.168.0.110:9001/adSearch/2/AdFind ', jsonstr)
    .subscribe(response => {
      console.log(response.json());
      
      console.log(" printing response");

      const result = response.json();
      this.resultArray = result.doc;
      console.log("resultAray response");

      console.log(this.resultArray);
      //console.log(this.resultArray._id);
      if(this.resultArray) {
        this.searchResultBool = true;
      }
    });

  }







}
