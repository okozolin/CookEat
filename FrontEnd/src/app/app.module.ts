
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from "./components/main/main.component";
import { SearchBoxComponent } from "./components/filter/searchbox/searchbox.component";
import { FilterContainerComponent } from "./components/filter/container/container.component";
import { TypeCheckBoxesComponent } from "./components/filter/type/type.component";
import { DatePickerComponent } from "./components/filter/datepicker/datepicker.component";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardItemComponent } from './cards/card-list/card-item/card-item.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { CardItemDetailsComponent } from './cards/card-item-details/card-item-details.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardListComponent,
    CardItemComponent,
    MainComponent,
    FilterContainerComponent,
    SearchBoxComponent,
    TypeCheckBoxesComponent,
    DatePickerComponent,
    CardItemDetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
   
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent],
  entryComponents: [CardItemDetailsComponent]
})
export class AppModule { }
