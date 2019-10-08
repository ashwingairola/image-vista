import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent implements OnInit {
  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      searchQuery: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.searchForm);
  }
}
