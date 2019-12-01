import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }

  sayHello(world: string): Observable<string> {
    return this.http.get('jaxrs-ng-web/api/v1/hello/' + world, {responseType: 'text'});
  }


}
