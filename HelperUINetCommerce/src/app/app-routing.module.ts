import { ShowUsersComponent } from './Components/Modules/NetCommerce/show-users/show-users.component';
import { HomeIndexComponent } from './Components/Home/home-index/home-index.component';
import { HomeNetcommerceComponent } from './Components/Modules/NetCommerce/home-netcommerce/home-netcommerce.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path : 'Home' , component: HomeIndexComponent
  },
  {
    path : 'NetCommerceModule' , component: HomeNetcommerceComponent
  },
  {
    path : 'NetCommerceModule/ShowUsersByPrograms/:id' , component: ShowUsersComponent
  },
  {
    path : '**' , component: HomeIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
