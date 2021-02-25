import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockComponent } from './layouts/components/block/block.component';
import { FloorComponent } from './layouts/components/floor/floor.component';
import { LayoutComponent } from './layouts/components/layout/layout.component';


const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'block/:id', component: BlockComponent },
  { path: 'floor/:id', component: FloorComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
