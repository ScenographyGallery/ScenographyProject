package com.gallery.scenography.repositories;


import com.gallery.scenography.entities.YouTubeVideo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface YouTubeVideoRepository extends JpaRepository<YouTubeVideo, Long>{


}
