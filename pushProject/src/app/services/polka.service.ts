import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Polkaman } from '../components/polkaman-db/polkaman/polkaman';

/*
  Services will use the @Injectable decorator. This decorator is used
  to let angular know that this component/service should expect to be
  injected into other pieces, or itself expecting something to be injected
  into it

  Note that in the previous example, we should have made a service in order
  to dependency inject, but we didn't because it is jsut an example

  A service provides data to components. Unlike components, they do not
  have their own view
*/
@Injectable({
  providedIn: 'root' //denotes that this service is available application
  //wide
})
export class PolkaService {

  constructor(private http:HttpClient) {}

  getAllPolkamans(){
    return this.http.get<Polkaman[]>(
      "http://localhost:8085/PolkaServlets/polkaapi/polkamans/all"
    )

    //this returns an observable with information from our call to
    //fetch polkamans servlet (which returns a JSON representation of
    // all of our polkamans in our db)
  }
}
