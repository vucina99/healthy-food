import { Component, OnInit } from '@angular/core';
import { SOCIAL_MEDIAS } from '../../shared/social-medias';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  public socials: any[] = SOCIAL_MEDIAS;

  ngOnInit(): void {
  }

}
