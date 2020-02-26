import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CookeatService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:1337/api/courses?';

  GetCourses(limit = 20, offset = 0, sortBy = 'owner', search = '' ) {
    // const newUrl = "http://localhost:1337/api/courses?limit=20&offset=0&sortBy=owner&foodType=Chinese&date=2020-02-12";
    return this.http.get<any[]>(this.url + `limit=${limit}&offset=${offset}&sortBy=${sortBy}&${search}`);

  }



}
