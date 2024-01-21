import { Component, OnInit } from '@angular/core';
import { TestingHttpService } from '../services/testing.http.service';
import { Store, select } from '@ngrx/store';
import { LoadTestingAction } from '../@state/actions/testing.action';
import { Observable } from 'rxjs';
import { TestingState, getTestingState } from '../@state/reducers/testing.reducer';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit{

  public testingState$: Observable<TestingState>;

  constructor(
    private store$: Store
    ) {}

  public ngOnInit(): void {
    this.store$.dispatch(new LoadTestingAction());
    this.testingState$ = this.store$.pipe(select(getTestingState));
  }
  
}
