import { Component, OnInit } from '@angular/core';
import { Review } from './review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  review: Review = new Review();
  submitted = false;
 
  constructor(private rs: ReviewService) { }
 
  ngOnInit() {
  }
 
  newReview(): void {
    this.submitted = false;
    this.review = new Review();
  }
 
  save() {
    this.rs.createReview(this.review)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.review = new Review();
  }
 
  onSubmit() {
    this.save();
  }

}
