/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestimonialService } from './testimonial.service';

describe('Service: Testimonial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestimonialService]
    });
  });

  it('should ...', inject([TestimonialService], (service: TestimonialService) => {
    expect(service).toBeTruthy();
  }));
});
