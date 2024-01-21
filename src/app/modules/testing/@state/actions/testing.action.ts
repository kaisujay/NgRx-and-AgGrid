import { Action } from '@ngrx/store';
import { TestingModel } from '../../models/testing.model';

export enum TestingActionTypes {
  LoadTesting = '[Testing] Load Testing',
  LoadTestingSuccess = '[Testing] Load Testing Success',
  LoadTestingFailed = '[Testing] Load Testing Failed'
}

export class LoadTestingAction implements Action {
  public readonly type = TestingActionTypes.LoadTesting;
  public constructor() { }
}

export class LoadTestingSuccessAction implements Action {
  public readonly type = TestingActionTypes.LoadTestingSuccess;
  public constructor(public result: TestingModel[]) { }
}

export class LoadTestingFailedAction implements Action {
  public readonly type = TestingActionTypes.LoadTestingFailed
  public constructor(public error: string) { }
}

export type TestingActionUnion =
  | LoadTestingAction
  | LoadTestingSuccessAction
  | LoadTestingFailedAction;