import { Injectable } from '@angular/core';
import { BlogView } from '../components/view/view-blog';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogViewService {

  constructor(private http:HttpClient) {}


  getAllBlogs(){
    return this.http.get<BlogView[]>(
    ""
     )
  }
}
