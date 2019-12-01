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

  constructor(private computeService: ComputeService) {
    this.operations = computeService.operationTypes;
  }

  ngOnInit() {
    this.operation = new Operation();
    this.operation.operation = OperationTypes.ADD;
  }

  doCompute() {
    this.computeService.doCompute(this.operation).subscribe((data: Operation) => {
      this.operation.result = data.result;
    });
  }
}
