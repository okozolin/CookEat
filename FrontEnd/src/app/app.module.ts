import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";
import { SearchBoxComponent } from "./components/filter/searchbox/searchbox.component";
import { FilterContainerComponent } from "./components/filter/container/container.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterContainerComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
