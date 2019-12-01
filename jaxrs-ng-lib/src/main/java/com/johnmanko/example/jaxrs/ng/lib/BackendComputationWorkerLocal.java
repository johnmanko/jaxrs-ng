/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.johnmanko.example.jaxrs.ng.lib;

import javax.ejb.Local;

/**
 *
 * @author john
 */
@Local
public interface BackendComputationWorkerLocal {

    public Operation doOperation(Operation operation);
    
}
