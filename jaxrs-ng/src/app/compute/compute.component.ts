import { Component, OnInit } from '@angular/core';
import { ComputeService } from '@services/compute.service';
import { Operation, OperationTypes, OperationType } from '@schema/operation.schema';
import { SelectItem } from 'primeng/api/primeng-api';

@Component({
  selector: 'app-compute',
  templateUrl: './compute.component.html',
  styleUrls: ['./compute.component.scss']
})
export class ComputeComponent implements OnInit {

  public operation: Operation;
  public operations: SelectItem[];
  public postData: string;
  public responseData: string;

  constructor(private computeService: ComputeService) {
    this.operations = computeService.operationTypes;
  }

  ngOnInit() {
    this.operation = new Operation();
    this.operation.operation = OperationTypes.ADD;
  }

  doCompute() {
    this.postData = null;
    this.responseData = null;
    this.responseData = null;
    this.operation.result = undefined;
    this.computeService.doCompute(this.operation).subscribe((data: Operation) => {
      this.postData = JSON.stringify(this.operation, null, 4);
      this.operation.result = data.result;
      this.responseData = JSON.stringify(data, null, 4);
    });
  }
}
