import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  // animations: [
  //   fader
  // ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet){
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    return outlet && outlet.activatedRouteData;
  }

}
