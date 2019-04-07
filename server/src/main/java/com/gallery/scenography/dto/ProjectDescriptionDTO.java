package com.gallery.scenography.dto;

import com.gallery.scenography.entities.ProjectDescription;
import lombok.Data;

@Data
public class ProjectDescriptionDTO {

  private Long id;

  private String name;

  private String description;

  private String hashtags;

  public ProjectDescriptionDTO() {
  }

  public ProjectDescriptionDTO(ProjectDescription projectDescription) {
    this.id = projectDescription.getId();
    this.name = projectDescription.getName();
    this.description = projectDescription.getDescription();
    this.hashtags = projectDescription.getHashtags();
  }
}
