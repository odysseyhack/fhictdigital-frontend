import { Component, OnInit } from '@angular/core';
import { formData } from './../../formData';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formData = new FormData;
  
  constructor() { }

  ngOnInit() {
  }

}
