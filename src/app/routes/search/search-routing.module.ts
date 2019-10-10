import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchHomeComponent } from './components/search-home/search-home.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchHomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
