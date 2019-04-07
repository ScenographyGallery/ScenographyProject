package com.gallery.scenography.services;

import com.gallery.scenography.dto.ArtistDTO;
import com.gallery.scenography.dto.PhotoDTO;
import com.gallery.scenography.entities.Artist;
import com.gallery.scenography.entities.Photo;
import com.gallery.scenography.repositories.ArtistRepository;
import com.gallery.scenography.repositories.PhotoRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotoService {

    @Autowired
    private PhotoRepository photoRepository;

    public List<PhotoDTO> getAllPhoto() {
        return photoRepository.findAll().stream().map(PhotoDTO::new).collect(Collectors.toList());
    }

    public PhotoDTO getOnePhoto(Long id) {
        return new PhotoDTO(photoRepository.getOne(id));
    }

    public void remove(Long id){
        photoRepository.deleteById(id);
    }

    public void put(Photo photo){
        photoRepository.save(photo);
    }

//TODO update

}
