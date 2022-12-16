import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    routing,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
