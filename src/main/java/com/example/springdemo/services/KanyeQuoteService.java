package com.example.springdemo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class KanyeQuoteService {

    private static final String KANYE_API_BASE_URL = "https://api.kanye.rest";

    @Autowired
    private RestTemplate restTemplate;

    // Method to fetch a Kanye West quote from the API
    public String getKanyeQuote() {
        String apiUrl = KANYE_API_BASE_URL + "/?format=text";
        return restTemplate.getForObject(apiUrl, String.class);
    }
}
