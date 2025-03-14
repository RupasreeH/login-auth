import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userResolver implements Resolve<any> {
  http = inject(HttpClient);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    //const userId = route.paramMap.get('id');
    console.log('Called resolver');
    // setTimeout(() => {
    //   console.log('delay called for 9 sec');
    // }, 9000);
    return this.http.get<any[]>('assets/data/user-data.json');
  }
}
