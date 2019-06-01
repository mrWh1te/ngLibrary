import { Injectable } from "@angular/core"

import { Overlay, OverlayConfig } from '@angular/cdk/overlay'

@Injectable()
export class DropDownService {
  constructor(public overlay: Overlay) {}

  getOverlayConfig(reference: HTMLElement): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(reference)
      .withPush(true)
      .withPositions([{
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]);

    const scrollStrategy = this.overlay.scrollStrategies.reposition();

    return new OverlayConfig({
      positionStrategy: positionStrategy,
      scrollStrategy: scrollStrategy,
      hasBackdrop: false
    });
  }
}