package com.gallery.scenography.controllers;

import static com.gallery.scenography.util.ResourceMappings.ARTIST;
import static com.gallery.scenography.util.ResourceMappings.PHOTO;

import com.gallery.scenography.dto.ArtistDTO;
import com.gallery.scenography.dto.PhotoDTO;
import com.gallery.scenography.entities.Artist;
import com.gallery.scenography.entities.Photo;
import com.gallery.scenography.services.ArtistService;
import com.gallery.scenography.services.PhotoService;
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
@RequestMapping(PHOTO)
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @GetMapping
    public List<PhotoDTO> getAllPhotos() {
        return photoService.getAllPhoto();
    }

    @GetMapping("/{id}")
    public PhotoDTO getOnePhoto(@PathVariable Long id) {
        return photoService.getOnePhoto(id);
    }

//TODO update

    @PostMapping("/{id}")
    public void put(@RequestBody Photo photo){
        photoService.put(photo);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable Long id){
        photoService.remove(id);
    }



}
