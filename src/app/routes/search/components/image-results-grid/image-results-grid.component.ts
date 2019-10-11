import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-results-grid',
  templateUrl: './image-results-grid.component.html',
  styleUrls: ['./image-results-grid.component.scss']
})
export class ImageResultsGridComponent implements OnInit {
  @Input() searchResult: any;

  constructor() {}

  ngOnInit() {
    console.log(this.searchResult);
  }
}
