import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceService{

    constructor (private http: Http){

    }

    getServices(): Observable<any> {

        return this.http.get("http://localhost:51680/api/services").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postService(): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:51680/api/services',
        JSON.stringify({
            Name: 'Service from front-end'
        }), opts);
    }
}