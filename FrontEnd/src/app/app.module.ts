
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardItemComponent } from './cards/card-list/card-item/card-item.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";

import { MainComponent } from "./components/main/main.component";
import { SearchBoxComponent } from "./components/filter/searchbox/searchbox.component";
import { FilterContainerComponent } from "./components/filter/container/container.component";
import { TypeCheckBoxesComponent } from "./components/filter/type/type.component";
import { DatePickerComponent } from "./components/filter/datepicker/datepicker.component";



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardListComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,

    MainComponent,
    FilterContainerComponent,
    SearchBoxComponent,
    TypeCheckBoxesComponent,
    DatePickerComponent,
  
    AppRoutingModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
