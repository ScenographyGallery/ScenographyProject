package com.gallery.scenography.controllers;

import static com.gallery.scenography.util.ResourceMappings.ARTIST;
import static com.gallery.scenography.util.ResourceMappings.YOU_TUBE_VIDEO;

import com.gallery.scenography.dto.ArtistDTO;
import com.gallery.scenography.dto.YouTubeVideoDTO;
import com.gallery.scenography.entities.Artist;
import com.gallery.scenography.entities.YouTubeVideo;
import com.gallery.scenography.services.ArtistService;
import com.gallery.scenography.services.YouTubeVideoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(YOU_TUBE_VIDEO)
public class YouTubeVideoController {

    @Autowired
    private YouTubeVideoService youTubeVideoService;

    @GetMapping
    public List<YouTubeVideoDTO> getAllYouTubeVideos() {
        return youTubeVideoService.getAllYouTubeVideos();
    }

    @GetMapping("/{id}")
    public YouTubeVideoDTO getOneYouTubeVideo(@PathVariable Long id) {
        return youTubeVideoService.getOneYouTubeVideo(id);
    }

//    @PostMapping("/{id}")
//    public void update(@RequestBody Artist artist, @PathVariable Long id){
//        artistService.update(id, artist);
//    }


    @PostMapping
    public void put(@RequestBody YouTubeVideo youTubeVideo){
        youTubeVideoService.put(youTubeVideo);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable Long id){
        youTubeVideoService.remove(id);
    }



}
