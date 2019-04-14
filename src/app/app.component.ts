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
   
   // console.log(translate.data);
   // translate.use('nl_advanced').then(() => {
   //   console.log(translate.data);
   // });

   //this.createPersona(); 
   console.log(this.getCookie("persona_tag"));
   //this.cookieExist()
  }

  cookieExist()
  {
    if (document.cookie.indexOf('persona_tag') == -1 ) {
      console.log("test");
    }
    else{
      console.log("123");
    }
  }

  getCookie(name: string) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }
}

  setLang(lang: string) {
    this.translate.use(lang);
  }
}
