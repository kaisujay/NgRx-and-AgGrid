import { createFeatureSelector } from '@ngrx/store';
import { TestingModel } from '../../models/testing.model';
import { TestingActionTypes, TestingActionUnion } from '../actions/testing.action';

export interface TestingState {
  data: {
    TestingData: TestingModel[];
  };
  isLoadingStarting: boolean;
  isLoadSuccess: boolean;
  error: string;
}

export const initialState: TestingState = {
  data: {
    TestingData: []
  },
  isLoadingStarting: false,
  isLoadSuccess: false,
  error: ''
};

export function TestingStateReducer(state: TestingState = initialState, action: TestingActionUnion): TestingState {
  switch (action.type) {  
    case TestingActionTypes.LoadTesting:
      return {
        ...state,
        // data: {
        //   ...state.data
        // },
        isLoadingStarting: true,
        isLoadSuccess: false,
        error: ''
      };

    case TestingActionTypes.LoadTestingSuccess:
      return {
        ...state,
        data: {       // Or just > TestingData : action.result,
          TestingData : {
            ...action.result
          }
        },
        isLoadingStarting: false,
        isLoadSuccess: true,
        error: ''
      };

    case TestingActionTypes.LoadTestingFailed:
      return {
        ...state,
        data: {
          ...state.data
        },
        isLoadingStarting: false,
        isLoadSuccess: false,
        error: action.error
      };
    
    default:
      return state;
  }
}

export const getTestingState = createFeatureSelector<TestingState>('testing');
