import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UnsplashApiService } from '@imgvista/api/unsplash/unsplash-api.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private unsplashApi: UnsplashApiService) {
    this.searchForm = new FormGroup({
      searchQuery: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
    this.unsplashApi.searchPhotos('cars').subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    console.log(this.searchForm);
  }
}
