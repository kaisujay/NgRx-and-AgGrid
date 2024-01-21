import { Component, OnInit } from '@angular/core';
import { TestingHttpService } from '../services/testing.http.service';
import { Store, select } from '@ngrx/store';
import { LoadTestingAction } from '../@state/actions/testing.action';
import { Observable } from 'rxjs';
import { TestingState, getTestingState } from '../@state/reducers/testing.reducer';
import { ColDef } from 'ag-grid-community';

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

    rowData = [
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ];
  
    // Column Definitions: Defines & controls grid columns.
    colDefs: ColDef[] = [
      { field: "make" },
      { field: "model" },
      { field: "price" },
      { field: "electric" }
    ];

  public ngOnInit(): void {
    this.store$.dispatch(new LoadTestingAction());
    this.testingState$ = this.store$.pipe(select(getTestingState));

    // Row Data: The data to be displayed.
  
  }
  
}
