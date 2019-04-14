import { Component, OnInit } from '@angular/core';
import { formData } from './../../formData';
import { RestService } from 'src/services/rest.service';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { HttpParams } from '@angular/common/http';

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
    this.rest.post('v1/persona/create', '').subscribe(data => {
    });

   this.router.navigateByUrl('/home');
  }
}
