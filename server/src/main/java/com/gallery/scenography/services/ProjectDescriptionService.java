package com.gallery.scenography.services;

import com.gallery.scenography.dto.PhotoDTO;
import com.gallery.scenography.dto.ProjectDescriptionDTO;
import com.gallery.scenography.entities.Photo;
import com.gallery.scenography.entities.ProjectDescription;
import com.gallery.scenography.repositories.PhotoRepository;
import com.gallery.scenography.repositories.ProjectDescriptionRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectDescriptionService {

    @Autowired
    private ProjectDescriptionRepository projectDescriptionRepository;

    public List<ProjectDescriptionDTO> getAllProjectDescriptions() {
        return projectDescriptionRepository.findAll().stream().map(ProjectDescriptionDTO::new).collect(Collectors.toList());
    }

    public ProjectDescriptionDTO getOneProjectDescription(Long id) {
        return new ProjectDescriptionDTO(projectDescriptionRepository.getOne(id));
    }

    public void remove(Long id){
        projectDescriptionRepository.deleteById(id);
    }

    public void put(ProjectDescription projectDescription){
        projectDescriptionRepository.save(projectDescription);
    }

//TODO update

}
