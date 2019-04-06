package com.gallery.scenography.services;

import com.gallery.scenography.dto.ArtistDTO;
import com.gallery.scenography.entities.Artist;
import com.gallery.scenography.repositories.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArtistService {

    @Autowired
    private ArtistRepository artistRepository;

    public List<ArtistDTO> getAllArtists() {
        return artistRepository.findAll().stream().map(ArtistDTO::new).collect(Collectors.toList());
    }

    public ArtistDTO getOneArtist(Long id) {
        return new ArtistDTO(artistRepository.getOne(id));
    }

//    public void update(){
//        artistRepository.
//    }

    public void remove(Long id){
        artistRepository.deleteById(id);
    }

}
