import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getProfileById(){
    return this.http.get('https://www.charlesgym.com.mx/agile/vendor/slim/slim/getProfile/1');
  }
  
  postImage(jsonphoto){
    return this.http.get('http://gmodelo.freevar.com/agile/vendor/slim/slim/postImage',jsonphoto);
  }
}
