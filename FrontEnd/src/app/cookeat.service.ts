import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CookeatService {
  private coursesUpdated = new Subject();

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:1337/api/courses?';


  getCourses(limit = 20, offset = 0, sortBy = 'owner', search = '' ) {
      const combinedUrl = this.url + `limit=${limit}&offset=${offset}&sortBy=${sortBy}&${search}`
      this.http.get<any[]>(combinedUrl)
        .subscribe(res => this.coursesUpdated.next(res));

      return this.coursesUpdated;
  }
}
