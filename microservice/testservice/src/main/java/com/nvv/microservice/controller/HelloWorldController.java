package com.nvv.microservice.controller;

import java.util.Enumeration;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/hello")
public class HelloWorldController {
    @GetMapping()
    public ResponseEntity<String> loadUnDeletedCustomers(HttpServletRequest request) {

        Enumeration<String> headerNames = request.getHeaderNames();

        StringBuilder sb = new StringBuilder();
        if (headerNames != null) {
            while (headerNames.hasMoreElements()) {
                String headerName = headerNames.nextElement();
                sb.append("Header: " + headerName + " value : " + request.getHeader(headerName) + "</br>");
            }
        }

        return ResponseEntity.ok().body("Hello<br>" + sb.toString());
    }

}
