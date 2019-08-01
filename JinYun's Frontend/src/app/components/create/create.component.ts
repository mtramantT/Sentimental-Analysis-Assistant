import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { Blog } from 'src/app/components/create/blog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  blog: Blog = new Blog();
  submitted = false;
 
  constructor(private blogService: BlogServiceService) { }
  //private blogService: BlogServiceService
 
  ngOnInit() {
  }
 
  newBlog(): void {
    this.submitted = false;
    this.blog = new Blog();
  }
 
  save() {
    this.blogService.createBlog(this.blog)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.blog = new Blog();
  }
 
  onSubmit() {
    this.save();
  }

}
