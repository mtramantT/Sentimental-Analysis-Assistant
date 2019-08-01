import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public radarChartLabels = ['Happiness', 'Sadness', 'Nutrual', 'Depressive'];
  public radarChartData = [
    {data: [170, 130, 180, 70], label: 'yesterday'},
    {data: [100, 150, 200, 45], label: 'today'}
  ];
  public radarChartType = 'radar';
//change the data of what you want to display
  ID;
  sen={
    name:"",
    id:"",
    mood:""
  }

  constructor(private http:HttpClient) { }
  ngOnInit() {
  }

  public fetchData(){
    this.sen.name = "pending";
    this.sen.id = "pending";
    this.sen.mood = "pending";

    this.http.get(""+this.ID + "/").subscribe(
      //the subscribe method returns an observable of a generic type
      data => {
        this.sen.name = data["name"];
        this.sen.id = data["id"];
        this.sen.mood = data["mood"];

        
      },
      error => {
        this.sen.name = "MISSing NO";
        this.sen.id ="0";
        this.sen.mood ="0";
      }
    )
  }

}
