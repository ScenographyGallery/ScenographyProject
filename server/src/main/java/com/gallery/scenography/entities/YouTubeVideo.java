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
@Table(name = "youtube_video")
public class YouTubeVideo {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name = "link", length = 300, nullable = false)
  private String link;

  @Column(name = "ARID", nullable = false)
  private Long arid;

}
