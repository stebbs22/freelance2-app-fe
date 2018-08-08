import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Document } from './document';

@ Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:3000/freelance_documents.json';

  constructor(
  	private http: Http
  	) {}

  getDocuments(): Observable<Document[]> {
  	return this.http.get(this.documentsUrl).pipe(
  					map((response: Response) => <Document[]>response.json()),
  					catchError(this.handleError));
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}