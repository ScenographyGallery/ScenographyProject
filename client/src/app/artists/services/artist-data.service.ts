import { Project } from './../../models/project';
import { Artist } from './../../models/artist';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

const PROJECTS_MOCK: Project[] = [
  { name: 'Project 1', image: 'https://www.w3schools.com/w3images/fjords.jpg',},
  { name: 'Project 2', image: 'https://www.w3schools.com/w3images/fjords.jpg',},
  { name: 'Project 3', image: 'https://www.w3schools.com/w3images/fjords.jpg',},
  { name: 'Project 4', image: 'https://www.w3schools.com/w3images/fjords.jpg',}
]

const ARTISTS_MOCK = [
  { 
    id: '1',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    firstName: 'Roman', 
    lastName: 'Yavoriv', 
    tags: ['light', 'beauty', 'flovers'],
    projects: PROJECTS_MOCK,
    avatar: 'https://pbs.twimg.com/profile_images/1047668019453972480/a0SAn64i_400x400.jpg',
    cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
  { id: '1', firstName: 'Roman', lastName: 'Yavoriv', cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
  { id: '1', firstName: 'Roman', lastName: 'Yavoriv', cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
  { id: '1', firstName: 'Roman', lastName: 'Yavoriv', cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
  { id: '1', firstName: 'Roman', lastName: 'Yavoriv', cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
  { id: '1', firstName: 'Roman', lastName: 'Yavoriv', cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
  { id: '1', firstName: 'Roman', lastName: 'Yavoriv', cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
  { id: '1', firstName: 'Roman', lastName: 'Yavoriv', cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
  { id: '1', firstName: 'Roman', lastName: 'Yavoriv', cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
  { id: '1', firstName: 'Roman', lastName: 'Yavoriv', cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
]

@Injectable({
  providedIn: 'root'
})
export class ArtistDataService {

  constructor() { }

  getArtists(): Observable<Artist[]> {
    return of(ARTISTS_MOCK);
  }

  getArtist(id: string): Observable<Artist> {
    return of(ARTISTS_MOCK[0]);
  }
}
