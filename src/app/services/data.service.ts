import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jphoto;
  constructor(private http: HttpClient) { }
  
  getProfileById(){
    return this.http.get('https://www.charlesgym.com.mx/agile/vendor/slim/slim/getProfile/1');
  }
  postImage(photoshida){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.jphoto = {
      "photo" : photoshida ,
    };
    console.log(photoshida);
    return this.http.post('https://www.charlesgym.com.mx/agile/vendor/slim/slim/postImage',JSON.stringify(this.jphoto));
  }
}
