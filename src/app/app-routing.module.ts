import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'virtual-scroll', component: VirtualScrollComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
