import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private router: Router) {
    this.searchForm = new FormGroup({
      searchQuery: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.searchForm);
    const query = this.searchForm.value.searchQuery;
    this.router.navigate(['/search'], { queryParams: { query } });
  }
}
