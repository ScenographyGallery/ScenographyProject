package com.gallery.scenography.repositories;


import com.gallery.scenography.entities.Artist;
import com.gallery.scenography.entities.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long>{


}
