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
    console.log('show dropdown')

    this.overlayRef = this.overlay.create(this.overlayConfig)
    this.overlayRef.attach(this.contentTemplate)

    // @todo fix bug: We need to communicate this back to the smart component....... 
    // right now the smart component doesnt know when the dropdown is closed by clicking backdrop so it emits another hide instead of show on click
    this.backDropClickSubscription = this.overlayRef.backdropClick().subscribe(() => this.hide())
  }

  public hide() {
    console.log('hide dropdown')

    if (this.overlayRef) {
      this.overlayRef.detach()
    }
    if (this.backDropClickSubscription) {
      this.backDropClickSubscription.unsubscribe()
      this.backDropClickSubscription = undefined
    }
  }
}