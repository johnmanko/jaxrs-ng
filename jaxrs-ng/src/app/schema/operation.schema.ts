
export class OperationTypes {
  static ADD: OperationType = 'ADD';
  static SUBTRACT: OperationType = 'SUBTRACT';
  static MULTIPLY: OperationType = 'MULTIPLY';
  static DIVIDE: OperationType = 'DIVIDE';
}

export type OperationType =
  'ADD' |
  'SUBTRACT' |
  'MULTIPLY' |
  'DIVIDE';

export class Operation {

  operation: OperationType;
  operand1: number;
  operand2: number;
  result: number;

  constructor() {
  }

}
