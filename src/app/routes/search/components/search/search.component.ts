import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { UnsplashApiService } from '@imgvista/api/unsplash/unsplash-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  query: string;
  searchForm: FormGroup;
  private queryParamsSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private unsplashApi: UnsplashApiService
  ) {
    this.query = '';
    this.searchForm = new FormGroup({
      searchQuery: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
    this.queryParamsSub = this.route.queryParamMap.subscribe(queryParams => {
      this.query = queryParams.get('query') || 'all';
      this.searchForm.controls.searchQuery.patchValue(this.query);
      this.fetchImages();
    });
  }

  ngOnDestroy() {
    if (this.queryParamsSub && !this.queryParamsSub.closed) {
      this.queryParamsSub.unsubscribe();
    }
  }

  fetchImages() {
    if (this.searchForm.invalid) {
      return;
    }

    this.unsplashApi
      .searchPhotos(this.searchForm.value.searchQuery)
      .subscribe(result => {
        console.log(result);
      });
  }
}
