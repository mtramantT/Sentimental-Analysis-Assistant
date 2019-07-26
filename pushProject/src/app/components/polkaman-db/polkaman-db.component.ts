import { Component, OnInit } from '@angular/core';
import { Polkaman } from './polkaman/polkaman';
import { PolkaService } from 'src/app/services/polka.service';

@Component({
  selector: 'app-polkaman-db',
  templateUrl: './polkaman-db.component.html',
  styleUrls: ['./polkaman-db.component.css']
})
export class PolkamanDbComponent implements OnInit {
  polkamans:Polkaman[]=[];
  constructor(private ps:PolkaService) {}
  //dependency inject the service

  ngOnInit() {
    this.ps
    .getAllPolkamans()
    .subscribe(
      data =>{
        console.log(data);
        this.polkamans = data;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
