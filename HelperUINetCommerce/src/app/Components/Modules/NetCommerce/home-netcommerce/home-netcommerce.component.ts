import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';

@Component({
  selector: 'app-home-netcommerce',
  templateUrl: './home-netcommerce.component.html',
  styleUrls: ['./home-netcommerce.component.css']
})
export class HomeNetcommerceComponent implements OnInit {
  parameterbyConsult: number;
  Selected: number;
  constructor( private router: Router) { }

  ngOnInit() {
  }

  ShowContext( id: any) {
    console.log('Error', id);
    this.Selected = id;
  }
  SelectedProgram(id: any) {

    this.parameterbyConsult = id;
  }
}
