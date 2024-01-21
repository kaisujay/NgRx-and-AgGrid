import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { TestingHttpService } from '../../services/testing.http.service';
import { 
  TestingActionTypes,
  LoadTestingAction, 
  LoadTestingFailedAction, 
  LoadTestingSuccessAction
 } from '../actions/testing.action';

@Injectable()
export class LoadTestingEffect {
  public constructor(
    private actions$: Actions,
    private testingHttpService: TestingHttpService
  ) { }

  public loadTestingEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TestingActionTypes.LoadTesting),
      switchMap((action: LoadTestingAction) => {
        return this.testingHttpService.getTestingModelAll().pipe(
          map(res => new LoadTestingSuccessAction(res)),
          catchError(err => of(new LoadTestingFailedAction(err)))
        );
      })
    )
  );
}