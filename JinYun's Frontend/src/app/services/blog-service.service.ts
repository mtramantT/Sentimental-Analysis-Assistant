import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http: HttpClient) { }

  createBlog(blog: any): Observable<any> {
    return this.http.post("", blog);
  }
}
