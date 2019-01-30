import { APINetCommerceService } from './../../../../Services/apinet-commerce.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Models/NetCommerce/user';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-net-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
result: User;
  constructor(private api: APINetCommerceService,
              private activatedRoute: ActivatedRoute) { }

@Input() parameterask: number;
program: number;
  ngOnInit() {
    this.GetAllUsers();
  }
    GetAllUsers() {
      console.log('Consulta en users', this.parameterask);
       this.api.GetUsers().subscribe((data: User) =>
      this.result = data
      );
      console.log(  this.parameterask, this.result);
    }
    ShowUsersByPrograms(id: string ) {
       this.activatedRoute.params.subscribe( params => {
        this.program = params['id'];
       });

      this.api.GetUsers().subscribe((data: User) =>
      this.result = data
      );
      console.log(this.result);
    }
  }
