import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UnsplashApiService } from '@imgvista/api/unsplash/unsplash-api.service';

import { SearchRoutingModule } from './search-routing.module';
import { SearchHomeComponent } from './components/search-home/search-home.component';

@NgModule({
  declarations: [SearchHomeComponent],
  imports: [CommonModule, ReactiveFormsModule, SearchRoutingModule],
  providers: [UnsplashApiService]
})
export class SearchModule {}
