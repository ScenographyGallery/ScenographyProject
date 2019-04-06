package com.gallery.scenography.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArtistController {

    @GetMapping("/hello")
    public String hi() {
        return "Hello world";
    }

}
