import { Component } from '@angular/core';
import { TranslateService } from 'src/services/translate.service';
import { RestService } from './../services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fhictdigital-frontend';
  favoriteCookie = document.cookie

  constructor(private translate: TranslateService, private rest : RestService) 
  {
    if (document.cookie.indexOf('fhictdigital-backend.herokuapp.com') == -1 ) {

    }

    translate.use('').then(() => {
      console.log(translate.data);
    });
  }
}
