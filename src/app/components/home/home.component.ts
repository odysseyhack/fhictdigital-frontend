import { Component, OnChanges } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from 'src/services/rest.service';
import { requestData } from './../../requestData';
import { TranslateService } from 'src/services/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {

  requestData : requestData;

  constructor(private translate : TranslateService, private rest : RestService ) 
  {
    this.rest.get('v1/persona/').subscribe(data => {
       this.requestData = data as unknown as requestData;
    
       if(this.requestData.success === true)
       {
         this.setLang(this.requestData.data);
       }
      });
  }

  ngOnChanges() {
    window.location.reload();
  }
  
  setLang(lang: string) {
    this.translate.use(lang);
  }
}
