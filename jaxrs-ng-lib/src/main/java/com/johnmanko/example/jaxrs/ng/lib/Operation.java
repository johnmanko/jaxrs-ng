/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.johnmanko.example.jaxrs.ng.lib;

import java.math.BigDecimal;
import java.math.RoundingMode;

/**
 *
 * @author john
 */
public class Operation {

    private OperaterType operation;
    private BigDecimal operand1;
    private BigDecimal operand2;
    private BigDecimal result;

    public Operation computeResult() {
        switch (this.operation) {
            case ADD:
                result = this.operand1.add(operand2);
                return this;
            case DIVIDE:
                result = this.operand1.divide(operand2, 6, RoundingMode.HALF_DOWN);
                return this;
            case MULTIPLY:
                result = this.operand1.multiply(operand2);
                return this;
            case SUBTRACT:
                result = this.operand1.subtract(operand2);
                return this;
        }

        return this;

    }

    public boolean isInvalid() {
        return (operand1 == null || operand2 == null || operation == null);
    }

    /**
     * @return the operation
     */
    public OperaterType getOperation() {
        return operation;
    }

    /**
     * @param operation the operation to set
     */
    public void setOperation(OperaterType operation) {
        this.operation = operation;
    }

    /**
     * @return the operand1
     */
    public BigDecimal getOperand1() {
        return operand1;
    }

    /**
     * @param operand1 the operand1 to set
     */
    public void setOperand1(BigDecimal operand1) {
        this.operand1 = operand1;
    }

    /**
     * @return the operand2
     */
    public BigDecimal getOperand2() {
        return operand2;
    }

    /**
     * @param operand2 the operand2 to set
     */
    public void setOperand2(BigDecimal operand2) {
        this.operand2 = operand2;
    }

    /**
     * @return the result
     */
    public BigDecimal getResult() {
        return result;
    }

    /**
     * @param result the result to set
     */
    public void setResult(BigDecimal result) {
        this.result = result;
    }

}
