import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './component/testing.component';
import { HttpClientModule } from '@angular/common/http';
import { TestingHttpService } from './services/testing.http.service';

@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TestingRoutingModule
  ],
  providers: [TestingHttpService],
})
export class TestingModule { }
