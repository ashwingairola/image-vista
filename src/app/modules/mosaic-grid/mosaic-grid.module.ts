import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MosaicGridContainerComponent } from './components/mosaic-grid-container/mosaic-grid-container.component';
import { MosaicGridItemDirective } from './directives/mosaic-grid-item.directive';
import { MosaicGridItemContentDirective } from './directives/mosaic-grid-item-content.directive';

@NgModule({
  declarations: [
    MosaicGridContainerComponent,
    MosaicGridItemDirective,
    MosaicGridItemContentDirective
  ],
  imports: [CommonModule],
  exports: [
    MosaicGridContainerComponent,
    MosaicGridItemDirective,
    MosaicGridItemContentDirective
  ]
})
export class MosaicGridModule {}
