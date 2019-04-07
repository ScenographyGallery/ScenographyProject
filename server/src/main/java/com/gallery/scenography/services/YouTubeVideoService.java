package com.gallery.scenography.services;

import com.gallery.scenography.dto.ArtistDTO;
import com.gallery.scenography.dto.YouTubeVideoDTO;
import com.gallery.scenography.entities.Artist;
import com.gallery.scenography.entities.YouTubeVideo;
import com.gallery.scenography.repositories.ArtistRepository;
import com.gallery.scenography.repositories.YouTubeVideoRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class YouTubeVideoService {

    @Autowired
    private YouTubeVideoRepository youTubeVideoRepository;

    public List<YouTubeVideoDTO> getAllYouTubeVideos() {
        return youTubeVideoRepository.findAll().stream().map(YouTubeVideoDTO::new).collect(Collectors.toList());
    }

    public YouTubeVideoDTO getOneYouTubeVideo(Long id) {
        return new YouTubeVideoDTO(youTubeVideoRepository.getOne(id));
    }

    public void remove(Long id){
        youTubeVideoRepository.deleteById(id);
    }

    public void put(YouTubeVideo youTubeVideo){
        youTubeVideoRepository.save(youTubeVideo);
    }

    //TODO redo all method
//    public Artist update(Long id, Artist artist) {
//        return artistRepository.findById(id)
//            .map(employee -> {
//                artist.setId(id);
//                return artistRepository.save(artist);
//            })
//            .orElseGet(() -> {
//                artist.setId(id);
//                return artistRepository.save(artist);
//            });
//    }

}
