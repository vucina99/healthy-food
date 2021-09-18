import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PATHS } from 'src/app/shared/paths';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getAllImages():Observable<any>{
    return this.http.get(PATHS.gallery);
  }

}
