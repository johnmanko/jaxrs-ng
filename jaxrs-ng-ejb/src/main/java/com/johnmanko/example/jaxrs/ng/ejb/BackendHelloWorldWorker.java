package com.johnmanko.example.jaxrs.ng.ejb;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;

/**
 * This bean uses the @LocalBean annotation
 * @author 
 */
@LocalBean
@Stateless
public class BackendHelloWorldWorker {
    
    public String doHello(String world) {
        return String.format("Hello, %s !", world);
    }
    
}
