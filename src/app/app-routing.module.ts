import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './pages/property/property.component';
import { PropertyEditComponent } from './pages/property/property-edit/property-edit.component';


const routes: Routes = [
  {
    path: 'properties',
    component: PropertyComponent
  },
  {
    path: 'properties/edit',
    component: PropertyEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
