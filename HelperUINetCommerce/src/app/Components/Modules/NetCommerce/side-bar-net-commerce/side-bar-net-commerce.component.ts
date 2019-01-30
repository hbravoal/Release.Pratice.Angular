import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';

@Component({
  selector: 'app-side-bar-net-commerce',
  templateUrl: './side-bar-net-commerce.component.html',
  styleUrls: ['./side-bar-net-commerce.component.css']
})
export class SideBarNetCommerceComponent implements OnInit {

// Evento el cual eel padre Home-Nerccommerce escuchará.
  @Output()  ContentSelected: EventEmitter<number>;


  constructor() {
    this.ContentSelected = new EventEmitter();

  }

  ShowContent(id: number) {
    this.ContentSelected.emit( id );
  }

  ngOnInit() {

  }


}
