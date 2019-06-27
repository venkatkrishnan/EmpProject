import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
  { path: 'form', loadChildren: './form/form.module#FormModule' },
  { path: 'forms', loadChildren: './form1/form1.module#Form1Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
