import { Injectable, ElementRef } from "@angular/core"

import { Overlay, OverlayConfig } from '@angular/cdk/overlay'

@Injectable()
export class DropDownService {
  constructor(public overlay: Overlay) {}

  getOverlayConfig(reference: ElementRef): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(reference.nativeElement)
      .withPush(true)
      .withPositions([{
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]) // @todo add more positions like one for the opposite (flipped) side, as it tries positions from 1 -> n until 1 fits 

    const scrollStrategy = this.overlay.scrollStrategies.reposition();

    return new OverlayConfig({
      positionStrategy: positionStrategy,
      scrollStrategy: scrollStrategy,
      hasBackdrop: false,
      // backdropClass: 'no-backdrop'
    });
  }
}