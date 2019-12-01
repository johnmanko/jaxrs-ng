package com.johnmanko.example.jaxrs.ng.web.resources;

import com.johnmanko.example.jaxrs.ng.lib.Operation;
import com.johnmanko.example.jaxrs.ng.ejb.BackendHelloWorldWorker;
import com.johnmanko.example.jaxrs.ng.lib.BackendComputationWorkerLocal;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author 
 */
@Path("v1")
public class JavaEE8Resource {
    
    @Inject
    private BackendHelloWorldWorker helloWorker;
    @Inject
    private BackendComputationWorkerLocal computationWorker;
    
    @GET
    public Response ping(){
        return Response
                .ok("ping")
                .build();
    }
    
    /**
     * Learn more about regular expressions.
     * @param world
     * @return 
     * @see https://en.wikipedia.org/wiki/Regular_expression
     */
    @GET
    @Path("/hello/{world: \\w+}")
    @Produces({MediaType.TEXT_PLAIN})
    public Response hello(@PathParam("world") String world) {
        return Response.ok(helloWorker.doHello(world), MediaType.TEXT_PLAIN).build();
    }
    
    @POST
    @Path("/compute")
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public Response compute(Operation operation) {
        if (operation.isInvalid()) {
            return Response.status(Response.Status.NOT_ACCEPTABLE.getStatusCode(), "Invalid operand(s) or operation.").build();
        }
        return Response.ok(computationWorker.doOperation(operation)).build();
    }
    
    
}
