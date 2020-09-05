import { Component, OnInit } from '@angular/core';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls:['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Property: any ={
    "Id":1,
    "Name":"Younis House",
    "Type":"House",
    "Price":12000
  }

  constructor() { }

  ngOnInit() {
  }

}
