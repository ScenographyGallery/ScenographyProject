package com.gallery.scenography.controllers;

import com.gallery.scenography.dto.ArtistDTO;
import com.gallery.scenography.services.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.gallery.scenography.util.ResourceMappings.ARTIST;

@RestController(value = ARTIST)
public class ArtistController {

    @Autowired
    private ArtistService artistService;

    @GetMapping
    public List<ArtistDTO> getAllArtists() {
        return artistService.getAllArtists();
    }

}
