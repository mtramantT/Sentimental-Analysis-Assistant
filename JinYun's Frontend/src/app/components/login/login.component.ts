import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  registrationForm1 = new FormGroup({
    userName: new FormControl("", Validators.required),
    passWord: new FormControl("", Validators.required)
  });

  ngOnInit() {}
}
