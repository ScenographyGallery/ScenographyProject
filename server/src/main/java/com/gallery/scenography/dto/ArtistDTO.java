package com.gallery.scenography.dto;

import com.gallery.scenography.entities.Artist;
import lombok.Data;

@Data
public class ArtistDTO {

    private Long id;

    private String firstName;

    private String lastName;

    private String phone;

    private String email;

    private String description;

    public ArtistDTO() {}

    public ArtistDTO(Artist artist) {
        this.id = artist.getId();
        this.firstName = artist.getFirstName();
        this.lastName = artist.getLastName();
        this.phone = artist.getPhone();
        this.email = artist.getPhone();
        this.description = artist.getDescription();
    }
}
