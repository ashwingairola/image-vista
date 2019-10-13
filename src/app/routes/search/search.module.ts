import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UnsplashApiService } from '@imgvista/api/unsplash/unsplash-api.service';

import { MosaicGridModule } from 'src/app/modules/mosaic-grid/mosaic-grid.module';

import { SearchRoutingModule } from './search-routing.module';
import { SearchHomeComponent } from './components/search-home/search-home.component';
import { SearchComponent } from './components/search/search.component';
import { ImageResultsGridComponent } from './components/image-results-grid/image-results-grid.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    SearchHomeComponent,
    SearchComponent,
    ImageResultsGridComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MosaicGridModule,
    SearchRoutingModule
  ],
  providers: [UnsplashApiService]
})
export class SearchModule {}
