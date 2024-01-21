import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './component/testing.component';
import { HttpClientModule } from '@angular/common/http';
import { TestingHttpService } from './services/testing.http.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TestingStateReducer } from './@state/reducers/testing.reducer';
import { LoadTestingEffect } from './@state/effects/load-testing.effect';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AgGridModule,
    StoreModule.forFeature('testing', TestingStateReducer),
    EffectsModule.forFeature([
      LoadTestingEffect
    ]),
    TestingRoutingModule
  ],
  providers: [TestingHttpService],
})
export class TestingModule { }
