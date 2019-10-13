import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MosaicGridContainerComponent } from './components/mosaic-grid-container/mosaic-grid-container.component';
import { MosaicGridItemComponent } from './components/mosaic-grid-item/mosaic-grid-item.component';
import { MosaicGridItemDirective } from './directives/mosaic-grid-item.directive';
import { MosaicGridItemContentDirective } from './directives/mosaic-grid-item-content.directive';

@NgModule({
  declarations: [MosaicGridContainerComponent, MosaicGridItemComponent, MosaicGridItemDirective, MosaicGridItemContentDirective],
  imports: [CommonModule],
  exports: [MosaicGridContainerComponent, MosaicGridItemComponent, MosaicGridItemDirective, MosaicGridItemContentDirective]
})
export class MosaicGridModule {}
