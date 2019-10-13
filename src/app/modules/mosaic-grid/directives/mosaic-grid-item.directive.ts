import {
  Directive,
  ViewChild,
  Host,
  ElementRef,
  AfterViewInit,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { MosaicGridContainerComponent } from '../components/mosaic-grid-container/mosaic-grid-container.component';
import { MosaicGridItemContentDirective } from './mosaic-grid-item-content.directive';
import { timer } from 'rxjs';

@Directive({
  selector: '[appMosaicGridItem]'
})
export class MosaicGridItemDirective implements AfterViewInit {
  @ContentChild(MosaicGridItemContentDirective, {
    read: ElementRef,
    static: true
  })
  gridItemContent: ElementRef<HTMLDivElement>;

  constructor(
    @Host() private host: MosaicGridContainerComponent,
    private el: ElementRef
  ) {}

  async ngAfterViewInit() {
    await timer(1000).toPromise();

    const gridContainer = this.host.gridContainer.nativeElement;
    const content = this.gridItemContent.nativeElement;

    const rowHeight = parseInt(
      window.getComputedStyle(gridContainer).getPropertyValue('grid-auto-rows'),
      10
    );
    const rowGap = parseInt(
      window.getComputedStyle(gridContainer).getPropertyValue('grid-row-gap'),
      10
    );
    const rowSpan = Math.ceil(
      content.getBoundingClientRect().height / (rowHeight + rowGap)
    );
    console.log(content.getBoundingClientRect().height);

    this.el.nativeElement.style.gridRowEnd = `span ${rowSpan}`;
  }
}
