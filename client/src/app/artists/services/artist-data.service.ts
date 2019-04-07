import { HttpClient } from '@angular/common/http';
import { Artist } from './../../models/artist';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistDataService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.baseUrl}artists`);
  }

  getArtist(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.baseUrl}artists/${id}`);
  }
}
