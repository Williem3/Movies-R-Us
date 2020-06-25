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
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    SearchComponent,
    LoginComponent,
    FavoritesComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    RouterModule,
    ApprouterRoutingModule,
    router,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [ MoviesService, ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
