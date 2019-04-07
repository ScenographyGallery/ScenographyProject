package com.gallery.scenography.dto;

import com.gallery.scenography.entities.Photo;
import java.sql.Blob;
import lombok.Data;

@Data
public class PhotoDTO {

    private Long id;

    private Blob photo;

    private Long arid;

    public PhotoDTO() {}

    public PhotoDTO(Photo photo) {
        this.id = photo.getId();
        this.photo = photo.getPhoto();
        this.arid = photo.getArid();
    }

}
