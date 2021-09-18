import { Component, OnInit } from '@angular/core';
import { Menu } from '../../shared/models/menu';
import { MenuService } from '../../shared/services/menu.service';
import { Category } from '../../shared/models/category';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

 
  constructor(private service : MenuService) { }

 
  public meals: Menu[];
  ngOnInit(): void {
    this.getAllMeals();
  }

  getAllMeals(){
    this.service.getAllMeals().subscribe(data => {
      this.meals = data;
    })
  }
 

}
