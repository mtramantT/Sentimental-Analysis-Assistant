import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private http: HttpClient) { }

  createReview(review: any): Observable<any> {
    return this.http.post("", review);
  }
}
