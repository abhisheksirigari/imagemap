import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/components/layout/layout.component';
import { BlockComponent } from './layouts/components/block/block.component';
import { FloorComponent } from './layouts/components/floor/floor.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BlockComponent,
    FloorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
