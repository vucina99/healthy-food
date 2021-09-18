import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Menu } from '../../../shared/models/menu';
import { MenuService } from '../../../shared/services/menu.service';
import { expand, flyInOut } from '../../../shared/animations/app.animations';



@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
        expand(),
        flyInOut()
      ]
})
export class MenuDetailsComponent implements OnInit {

  errorMessage = '';
  meal: Menu | undefined;

  constructor(private route: ActivatedRoute,
              private service: MenuService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getMeal(id);
    }
  }

  getMeal(id: number): void {
    this.service.getMeal(id).subscribe({
      next: meal => this.meal = meal,
      error: err => this.errorMessage = err
    });
  }


}
