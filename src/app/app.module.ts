import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {ApprouterRoutingModule, router} from './approuter/approuter-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {MoviesService} from './movies.service';
import {ApiService} from './api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ApprouterRoutingModule,
    router,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ MoviesService, ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
