import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent} from './form.component';
import { PassMessageService } from '../pass-message.service';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  declarations: [FormComponent],
  providers: [PassMessageService]
})
export class FormModule { }
