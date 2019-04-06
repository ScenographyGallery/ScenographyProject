package com.gallery.scenography.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "artists")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "first_name", length = 30, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 30, nullable = false)
    private String lastName;

    @Column(name = "phone", length = 10, nullable = false)
    private String phone;

    @Column(name = "email", length = 255, nullable = false)
    private String email;

    @Column(name ="description", length = 3000, nullable = true)
    private String description;
}
