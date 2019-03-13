import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
//import { Observable, throwError, of } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json' //,
    // 'Authorization': 'my-auth-token'
  }),
  withCredentials: true
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testiap';
  supercontent = 'super content';

  constructor(private httpClient: HttpClient) {
  }

  onClick() {
    this.supercontent = 'clicked!';

const options: {
            headers?: HttpHeaders,
            observe?: 'body',
            params?: HttpParams,
            reportProgress?: boolean,
            responseType: 'text',
            withCredentials?: boolean
        } = {
            responseType: 'text'
        };

    this.httpClient.get('https://nvvtestbackend.appspot.com/hello', options )
    //this.httpClient.get<string>('https://nvvtestbackend.appspot.com/hello') //, httpOptions)
      .pipe(
        //tap(_ => console.log(`fetched product id=${id}`)),
        //catchError(this.handleError<Partner>(`getPartner id=${id}`))
      ).subscribe(returnedData => {
          this.supercontent = 'OK ' + returnedData
        },
        errorHappened => {
          console.log("there was an error");
          console.log(errorHappened);
          this.supercontent = 'Error ' + errorHappened
        },
        () => {
          console.log("Everything is complete");
        });

  }
}
