import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";
import { SearchBoxComponent } from "./components/filter/searchbox/searchbox.component";
import { FilterContainerComponent } from "./components/filter/container/container.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterContainerComponent,
    SearchBoxComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
