import {
  Component,
  Host,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { MosaicGridContainerComponent } from '../mosaic-grid-container/mosaic-grid-container.component';

@Component({
  selector: 'app-mosaic-grid-container > app-mosaic-grid-item',
  templateUrl: './mosaic-grid-item.component.html',
  styleUrls: ['./mosaic-grid-item.component.scss']
})
export class MosaicGridItemComponent implements AfterViewInit {
  @ViewChild('gridItemContent', { static: true }) gridItemContent: ElementRef<
    HTMLDivElement
  >;

  constructor(
    @Host() private host: MosaicGridContainerComponent,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    const gridContainer = this.host.gridContainer.nativeElement;
    const content = this.gridItemContent.nativeElement;
    console.log(this.el);

    const rowHeight = parseInt(
      window.getComputedStyle(gridContainer).getPropertyValue('grid-auto-rows'),
      10
    );
    const rowGap = parseInt(
      window.getComputedStyle(gridContainer).getPropertyValue('grid-row-gap'),
      10
    );
    const rowSpan = Math.ceil(
      (content.getBoundingClientRect().height) / (rowHeight + rowGap)
    );

    this.el.nativeElement.style.gridRowEnd = `span ${rowSpan}`;
  }
}
