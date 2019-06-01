import { Component, Input, ViewChild, OnInit, OnDestroy } from "@angular/core"

import { OverlayConfig, OverlayRef, Overlay } from '@angular/cdk/overlay'
import { TemplatePortalDirective } from '@angular/cdk/portal'

import { Observable, Subscription } from 'rxjs'
import { map, skip } from 'rxjs/operators'

@Component({
  selector: 'drop-down-ui',
  templateUrl: './drop-down-ui.component.html',
  styleUrls: ['./drop-down-ui.component.scss']
})
export class DropDownUiComponent implements OnInit, OnDestroy {
  @Input() overlayConfig: OverlayConfig
  @Input() open$: Observable<boolean>

  openSubscription: Subscription
  backDropClickSubscription: Subscription

  @ViewChild(TemplatePortalDirective, {static: false})
  public contentTemplate: TemplatePortalDirective

  protected overlayRef: OverlayRef

  constructor(protected overlay: Overlay) {}

  ngOnInit(): void {
    this.openSubscription = this.open$.pipe(
      skip(1), // skip the initial "false" state, because the UI is already closed
      map(toOpen => {
        if (toOpen) {
          this.show()
        } else {
          this.hide()
        }
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.openSubscription.unsubscribe()
    this.backDropClickSubscription.unsubscribe()
  }

  public show() {
    this.overlayRef = this.overlay.create(this.overlayConfig)
    this.overlayRef.attach(this.contentTemplate)

    this.backDropClickSubscription = this.overlayRef.backdropClick().subscribe(() => this.hide())
  }

  public hide() {
    if (this.overlayRef) {
      this.overlayRef.detach()
    }
  }
}