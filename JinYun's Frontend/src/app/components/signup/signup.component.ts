import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  // below we are creating a instance of a FormGroup called registrationForm
  registrationForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required),
    passWord: new FormControl("", Validators.required)
  });
  ngOnInit() {}
}
