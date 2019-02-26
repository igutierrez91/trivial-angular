import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Configuration } from '../models/Options';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) {

  }

  countdown(seconds: number = 10) {
    return timer(1000, 1000).pipe(
            take(seconds),
        );
  }

  getOptionsGame(): Observable<Configuration> {
    return this.http.get<Configuration>('assets/configuration/configuration.json');
  }

}
