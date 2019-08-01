import { Component, OnInit } from '@angular/core';
import { BlogView } from './view-blog';
import { BlogViewService } from 'src/app/services/blog-view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  blogs:BlogView[]=[];


  constructor(private bvs:BlogViewService) {
    //dependency injection
    
  }

  ngOnInit() {
    this.bvs
    .getAllBlogs()
    //returning observable
    .subscribe(
      data =>{
        console.log(data);
        this.blogs = data;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
