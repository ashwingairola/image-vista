import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { UnsplashApiService } from '@imgvista/api/unsplash/unsplash-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  searchResults: any;
  private queryParamsSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unsplashApi: UnsplashApiService
  ) {
    this.searchForm = new FormGroup({
      searchQuery: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
    this.queryParamsSub = this.route.queryParamMap.subscribe(queryParams => {
      const query = queryParams.get('query') || 'all';
      this.searchForm.controls.searchQuery.patchValue(query);
      this.fetchImages();
    });
  }

  ngOnDestroy() {
    if (this.queryParamsSub && !this.queryParamsSub.closed) {
      this.queryParamsSub.unsubscribe();
    }
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }

    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: { query: this.searchForm.value.searchQuery }
    });
  }

  fetchImages() {
    this.unsplashApi
      .searchPhotos(this.searchForm.value.searchQuery)
      .subscribe(result => {
        this.searchResults = result;
      });
  }
}
