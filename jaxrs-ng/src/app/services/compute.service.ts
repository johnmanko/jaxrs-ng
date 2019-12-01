import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation, OperationTypes } from '@schema/operation.schema';
import { SelectItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ComputeService {

  public operationTypes: SelectItem[];

  constructor(private http: HttpClient) {
    this.operationTypes = [
      { label: OperationTypes.ADD, value: OperationTypes.ADD },
      { label: OperationTypes.SUBTRACT, value: OperationTypes.SUBTRACT },
      { label: OperationTypes.MULTIPLY, value: OperationTypes.MULTIPLY },
      { label: OperationTypes.DIVIDE, value: OperationTypes.DIVIDE }
    ];

  }

  doCompute(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>('jaxrs-ng-web/api/v1/compute', operation);
  }

}
