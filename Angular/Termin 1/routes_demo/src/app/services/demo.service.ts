import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    console.log(error.toString())
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

   getMethodDemo(): Observable<Object> {
     console.log("a");
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .map(this.parseData)
      .catch(this.handleError);
  }

  postMethodDemo(): Observable<Object> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = "https://jsonplaceholder.typicode.com/posts";

    let newMember={
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    return this.http.post(url, newMember, options)
      .map(this.parseData)
      .catch(this.handleError);
  }

}
