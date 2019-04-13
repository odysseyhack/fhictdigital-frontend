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

  addData()
  {
    this.rest.post('v1/persona/create', formData).subscribe();
  }

}
