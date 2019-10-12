import { Component, OnInit, Input } from '@angular/core';

import { Unsplash } from '@imgvista/contracts/unsplash.contract';

@Component({
  selector: 'app-image-results-grid',
  templateUrl: './image-results-grid.component.html',
  styleUrls: ['./image-results-grid.component.scss']
})
export class ImageResultsGridComponent implements OnInit {
  @Input() searchResult: Unsplash.ISearchResult;

  constructor() {}

  ngOnInit() {
    console.log(this.searchResult);
  }
}
