import { Component, OnInit } from '@angular/core';
import { formData } from './../../formData';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formData = new FormData;
  
  constructor(private rest: RestService) { }

  ngOnInit() {
  }

  createPersona()
  {
    this.rest.post('v1/persona/create', '').subscribe(data => {
      console.log(data);
    });

    console.log(this.getCookie('persona_tag'));
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

   getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

}
