/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.johnmanko.example.jaxrs.ng.ejb;

import javax.ejb.Stateless;
import com.johnmanko.example.jaxrs.ng.lib.BackendComputationWorkerLocal;
import com.johnmanko.example.jaxrs.ng.lib.Operation;

/**
 * This bean implements an interface that uses the @Local annotation
 *
 * @author john
 */
@Stateless
public class BackendComputationWorker implements BackendComputationWorkerLocal {

    @Override
    public Operation doOperation(Operation operation) {
        return operation.computeResult();
    }
}
