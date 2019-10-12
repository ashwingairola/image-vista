import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Unsplash } from '@imgvista/contracts/unsplash.contract';

@Injectable()
export class UnsplashApiService {
  constructor(private http: HttpClient) {}

  searchPhotos(query: string): Observable<Unsplash.ISearchResult> {
    return this.http.get<Unsplash.ISearchResult>('imgApi/search/photos', {
      params: { query }
    });
  }
}
