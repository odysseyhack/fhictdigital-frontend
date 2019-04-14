import { Component, OnInit } from '@angular/core';
import { formData } from './../../formData';
import { RestService } from 'src/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formData = new FormData;
  
  constructor(private rest: RestService, private router : Router) { }

  ngOnInit() {
  }

  createPersona()
  {
    console.log(formData);
    this.rest.post('v1/persona/create', '').subscribe(data => {
    });

    this.router.navigateByUrl('/home');
  }
}
