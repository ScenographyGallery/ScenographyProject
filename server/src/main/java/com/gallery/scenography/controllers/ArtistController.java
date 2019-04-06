package com.gallery.scenography.controllers;

import com.gallery.scenography.dto.ArtistDTO;
import com.gallery.scenography.services.ArtistService;
import javax.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

    @GetMapping("/{id}")
    public ArtistDTO getOneArtist(@PathVariable Long id) {
        return artistService.getOneArtist(id);
    }

//    @PostMapping("/{id}")
//    public void update(@PathVariable Long id){
//        artistService.update();
//    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable Long id){
        artistService.remove(id);
    }



}
