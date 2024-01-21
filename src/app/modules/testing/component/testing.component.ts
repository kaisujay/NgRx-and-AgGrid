import { Component } from '@angular/core';
import { TestingHttpService } from '../services/testing.http.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {

  constructor(public http: TestingHttpService) {
    http.getTestingModelAll().subscribe(data => {
      console.log(data[0]);
    });
  }
  
}
