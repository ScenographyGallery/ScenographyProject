package com.gallery.scenography.dto;

import com.gallery.scenography.entities.YouTubeVideo;
import lombok.Data;

@Data
public class YouTubeVideoDTO {

  private Long id;

  private String link;

  private Long arid;

  public YouTubeVideoDTO() {
  }

  public YouTubeVideoDTO(YouTubeVideo youTubeVideo) {
    this.id = youTubeVideo.getId();
    this.link = youTubeVideo.getLink();
    this.arid = youTubeVideo.getArid();
  }
}
