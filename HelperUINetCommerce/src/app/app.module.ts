import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeIndexComponent } from './Components/Home/home-index/home-index.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { HomeNetcommerceComponent } from './Components/Modules/NetCommerce/home-netcommerce/home-netcommerce.component';
import { SideBarNetCommerceComponent } from './Components/Modules/NetCommerce/side-bar-net-commerce/side-bar-net-commerce.component';
import { ContentNetCommerceComponent } from './Components/Modules/NetCommerce/content-net-commerce/content-net-commerce.component';
import { ShowUsersComponent } from './Components/Modules/NetCommerce/show-users/show-users.component';
import { UnlockUserComponent } from './Components/Modules/NetCommerce/unlock-user/unlock-user.component';
import { UnlockUsersComponent } from './Components/Modules/NetCommerce/unlock-users/unlock-users.component';

import { HttpClientModule } from '@angular/common/http';
import { AskUserComponent } from './Components/Modules/NetCommerce/ask-user/ask-user.component';
import { ProgramsComponent } from './Components/Modules/NetCommerce/programs/programs.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeIndexComponent,
    FooterComponent,
    HeaderComponent,
    HomeNetcommerceComponent,
    SideBarNetCommerceComponent,
    ContentNetCommerceComponent,
    ShowUsersComponent,
    UnlockUserComponent,
    UnlockUsersComponent,
    AskUserComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
