import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormGroup, Form} from '@angular/forms';

@Component({
  selector: 'app-input-form-content',
  templateUrl: './input-form-content.component.html',
  styleUrls: ['./input-form-content.component.css']
})
export class InputFormContentComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['101', '102', '103'];
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
