import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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

    this.httpClient.get<string>('https://mynewnvv.appspot.com/hello') //, httpOptions)
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
