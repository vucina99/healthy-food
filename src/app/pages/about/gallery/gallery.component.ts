import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../shared/services/gallery.service';
import { Gallery } from '../../../shared/models/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private service: GalleryService) { }

  public gallery: Gallery[];
  // public filterData: any[] = GALLERY_IMG_TYPES;
  ngOnInit(): void {
    this.getAllImages();
  }

  getAllImages(){
    this.service.getAllImages().subscribe(data => {
      this.gallery = data;
    });
  }

}
