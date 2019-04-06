import { Artist } from './../../models/artist';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

const ARTISTS_MOCK = [
  { id: '1', firstName: 'Roman', lastName: 'Yavoriv', cover: 'https://images.unsplash.com/photo-1554384919-3c159e9023be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
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
}
