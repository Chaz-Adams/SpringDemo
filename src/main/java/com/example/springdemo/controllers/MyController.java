package com.example.springdemo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MyController {

    // Endpoint to navigate to the first page
    @RequestMapping("/first-page")
    public String firstPage() {
        return "first-page"; // Assuming first-page.html is in resources/templates directory
    }

    // Endpoint to navigate to the second page
    @RequestMapping("/second-page")
    public String secondPage() {
        return "second-page"; // Assuming second-page.html is in resources/templates directory
    }
}
