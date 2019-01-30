import { APINetCommerceService } from './../../../../Services/apinet-commerce.service';
import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Programs } from 'src/app/Models/NetCommerce/programs';

@Component({
  selector: 'app-net-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
index: number;
Programs: Programs;

@Output() ProgramSelected: EventEmitter<number>;

  constructor(private api: APINetCommerceService) {
    this.ProgramSelected = new EventEmitter();
   }

   OnChangeProgram(itemSelectedValue: number) {
    this.ProgramSelected.emit(itemSelectedValue);
    console.log('Onchange Program:', itemSelectedValue);
   }



  ngOnInit() {
    this.GetPrograms();
  }
  GetPrograms() {
    this.api.GetPrograms().subscribe((data: Programs) =>
    this.Programs = data
    );
  }
}
