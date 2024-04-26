package com.example.springdemo.controllers;

import com.example.springdemo.services.KanyeQuoteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class KanyeQuoteController {

    private final KanyeQuoteService kanyeQuoteService;

    public KanyeQuoteController(KanyeQuoteService kanyeQuoteService) {
        this.kanyeQuoteService = kanyeQuoteService;
    }

    @GetMapping("/kanye-quote")
    public String getKanyeQuote() {
        return kanyeQuoteService.getKanyeQuote();
    }

}
