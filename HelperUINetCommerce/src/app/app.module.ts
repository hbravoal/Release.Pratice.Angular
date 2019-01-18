import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeIndexComponent } from './Components/Home/home-index/home-index.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HeaderComponent } from './Components/Shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeIndexComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
