import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Form1RoutingModule } from './form1-routing.module';
import { Form1Component} from './form1.component';
import { PassMessageService } from '../pass-message.service';


@NgModule({
  declarations: [Form1Component],
  imports: [
    CommonModule,
    Form1RoutingModule,
    ReactiveFormsModule
  ],
  providers: [PassMessageService]
})
export class Form1Module { }
