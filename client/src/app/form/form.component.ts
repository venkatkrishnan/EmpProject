import { Component, OnInit, OnDestroy } from '@angular/core';
import { PassMessageService } from '../pass-message.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  message: any;
  constructor(private msg: PassMessageService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }

}
