import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Form1Component } from './form1.component'

const routes: Routes = [ { path: '', component: Form1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Form1RoutingModule { }
