import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meals-by-category',
  templateUrl: './meals-by-category.component.html',
  styleUrls: ['./meals-by-category.component.css']
})
export class MealsByCategoryComponent implements OnInit {

  category:any;
  meals:any;
  categories=[];
  constructor(private service: MenuService, private http: HttpClient, private route: ActivatedRoute) { 
    this.route.params.subscribe((params : Params) => {
      this.category = this.route.snapshot.params["category"]
    })
  }


count=0;
  ngOnInit() {
    this.service.getAllMeals().subscribe(
      Response => {
        this.meals = Response;
        for(let i=0; i<this.meals.length; i++){
          if(this.meals[i].category == this.category){
            this.categories[this.count] = this.meals[i]
            this.count++;
          }
        }
      }
    )
  }

}
