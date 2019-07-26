import { Component, OnInit } from '@angular/core';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
variable = "Still a secret ;)";
visibility = true;
userInput="";
toggleVisibility(){
  this.visibility = !this.visibility;
}
  constructor() { }

  ngOnInit() {
  }

}
