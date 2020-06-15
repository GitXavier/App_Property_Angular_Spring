import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './pages/property/property.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertyListComponent } from './pages/property/property-list/property-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertiesComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
