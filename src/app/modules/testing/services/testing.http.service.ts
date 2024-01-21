import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestingModel } from '../models/testing.model';

@Injectable()
export class TestingHttpService {

  constructor(private http: HttpClient) { }

  private url='https://jsonplaceholder.typicode.com/comments';

  public getTestingModelAll(): Observable<TestingModel[]> {
    return this.http.get<TestingModel[]>(this.url);
  }

  public getTestingModelById(id: number): Observable<TestingModel> {
    return this.http.get<TestingModel>(this.url+'?id='+id);
  }

  public saveTestingModel(testingModel: TestingModel): Observable<void> {
    return this.http.post<void>(this.url, testingModel);
  }
}
