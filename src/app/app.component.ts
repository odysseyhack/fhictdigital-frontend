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

  constructor(private translate: TranslateService, private rest : RestService) 
  {
   
    console.log(translate.data);
   // translate.use('nl_advanced').then(() => {
   //   console.log(translate.data);
   // });

   this.createPersona(); 
  }

  createPersona()
  {
    this.rest.post('v1/persona/create', '').subscribe(data => {
      console.log(data);
  });

  //this.rest.get('v1/persona/reassign').subscribe(data => {
  //  console.log(data);
//});
  }

  cookieExist()
  {
    if (document.cookie.indexOf('fhictdigital-backend.herokuapp.com') == -1 ) {
      console.log("test");
    }
    else{
      console.log("123");
    }
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }
}
