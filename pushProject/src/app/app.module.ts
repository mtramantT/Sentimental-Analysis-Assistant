//modules:
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
//compenents:
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DatabindingComponent } from "./components/databinding/databinding.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { PokeapiComponent } from "./components/pokeapi/pokeapi.component";
import { PolkamanDbComponent } from "./components/polkaman-db/polkaman-db.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { ReviewComponent } from "./review/review.component";

//@NgModule is a decorator that denotes that this is a module
//a decorator in general is somewhat analogous to annotations in java
@NgModule({
  declarations: [
    //Declare all components that are being used in the module
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DatabindingComponent,
    DirectivesComponent,
    PokeapiComponent,
    PolkamanDbComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    ReviewComponent
  ],
  imports: [
    //imports are reserved for bunles of components/services etc
    //you import modules here that this module is dependent on
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
