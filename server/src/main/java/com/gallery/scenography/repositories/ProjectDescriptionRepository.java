package com.gallery.scenography.repositories;


import com.gallery.scenography.entities.Artist;
import com.gallery.scenography.entities.ProjectDescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectDescriptionRepository extends JpaRepository<ProjectDescription, Long>{


}
