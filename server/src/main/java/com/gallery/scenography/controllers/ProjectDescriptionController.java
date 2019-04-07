package com.gallery.scenography.controllers;

import static com.gallery.scenography.util.ResourceMappings.PHOTO;
import static com.gallery.scenography.util.ResourceMappings.PROJECT_DESCRIPTION;

import com.gallery.scenography.dto.PhotoDTO;
import com.gallery.scenography.dto.ProjectDescriptionDTO;
import com.gallery.scenography.entities.Photo;
import com.gallery.scenography.entities.ProjectDescription;
import com.gallery.scenography.services.PhotoService;
import com.gallery.scenography.services.ProjectDescriptionService;
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
@RequestMapping(PROJECT_DESCRIPTION)
public class ProjectDescriptionController {

    @Autowired
    private ProjectDescriptionService projectDescriptionService;

    @GetMapping
    public List<ProjectDescriptionDTO> getAllProjectDescriptions() {
        return projectDescriptionService.getAllProjectDescriptions();
    }

    @GetMapping("/{id}")
    public ProjectDescriptionDTO getOneProjectDescription(@PathVariable Long id) {
        return projectDescriptionService.getOneProjectDescription(id);
    }

//TODO update

    @PostMapping("/{id}")
    public void put(@RequestBody ProjectDescription projectDescription){
        projectDescriptionService.put(projectDescription);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable Long id){
        projectDescriptionService.remove(id);
    }



}
