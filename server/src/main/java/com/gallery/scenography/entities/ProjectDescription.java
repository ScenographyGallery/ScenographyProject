package com.gallery.scenography.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "project_description")
public class ProjectDescription {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name = "name", length = 30, nullable = false)
  private String name;

  @Column(name ="description", length = 3000, nullable = true)
  private String description;

  @Column(name ="hashtags", length = 300, nullable = true)
  private String hashtags;



}
