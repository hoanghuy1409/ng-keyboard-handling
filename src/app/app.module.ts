import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AuMaskModule } from "./au-mask/au-mask.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuMaskModule, HttpClientModule, AuMaskModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
