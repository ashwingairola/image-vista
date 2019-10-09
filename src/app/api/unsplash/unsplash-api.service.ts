import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UnsplashApiService {
  constructor(private http: HttpClient) {}

  searchPhotos(query: string) {
    return this.http.get('imgApi/search/photos', { params: { query } });
  }
}
