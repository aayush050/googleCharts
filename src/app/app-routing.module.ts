import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [

  {path:'',component:InputComponent},
  {path:'graph',component:GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
