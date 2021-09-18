import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../../shared/services/testimonial.service';
import { Testimonial } from '../../../shared/models/testimonial';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor(private service: TestimonialService) { }

  public reviews: Testimonial[];
  ngOnInit(): void {
    this.getAllReviews();
  }

  getAllReviews(){
    this.service.getAllReviews().subscribe(data => {
      this.reviews = data;
    })
  }
}
