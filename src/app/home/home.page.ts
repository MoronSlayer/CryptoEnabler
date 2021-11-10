import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Url = 'assets/config.json';

  constructor(private http: HTTP,
    private http1: HttpClient ) {}
 
  onClick(){
    const options = {method: 'GET'}; 
// method to get data from api and dsiplay repson in jsoon format
  fetch('https://api.opensea.io/api/v1/assets?owner=0x05DaE8B6A2F0AD8F6bA8287fd16e37EBa26Ef1b4&order_direction=desc&offset=0&limit=20', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  }
}
