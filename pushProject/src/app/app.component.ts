import { Component } from '@angular/core';
/*
  any @ you see in typescript is a decorator.
  Decorators describe meta data for the application and allow the compiler to bring
  in the necessary resources when compiling your project. For instance, the compiler knows
  to only bring resources needed for components in this class
*/
@Component({
  /*
    @Compenent is a decorator that denotes that this typescript is a components (as opposed to
      being a module or some other type of angular structure)
  */



  /* 
    Describes the custom html element that will have THIS component's view
    and where it will be injected
  */
  selector: 'app-root',
  /*
      This points to the location of the html that will be used as the view. This html
      is what will be injected into the selector
   */
  templateUrl: './app.component.html',
  /*
      should you want to use an external css file, you would specify it below
  */
  styleUrls: ['./app.component.css']
})

/*
  Inside the class is where we can make use of variables and business logic for our app
  Note that export class will make this component public for use throughout the app
*/
export class AppComponent {
  title = 'WilliamExample';
}
