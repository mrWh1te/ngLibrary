import { Component, Input, ElementRef, OnDestroy, OnInit, ViewChild, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core"
import { OverlayRef, Overlay } from '@angular/cdk/overlay'
import { TemplatePortalDirective } from '@angular/cdk/portal'

import { Observable, Subscription } from 'rxjs'
import { skip, map } from 'rxjs/operators'

import { DropDownService } from '../../services/drop-down.service'

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownComponent implements OnInit, OnDestroy {
  @Input()
  public attachToElement: ElementRef

  @Input()
  public isOpen$: Observable<boolean>

  @Output() onBackDropClick: EventEmitter<any> = new EventEmitter<any>()

  private openSubscription: Subscription
  private backDropClickSubscription: Subscription

  @ViewChild(TemplatePortalDirective, {static: false})
  private contentTemplate: TemplatePortalDirective

  private overlayRef: OverlayRef

  constructor(
    private overlay: Overlay,
    private dropDownService: DropDownService
  ) {}

  ngOnInit(): void {    
    this.openSubscription = this.isOpen$.pipe(
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

  private show() {
    this.overlayRef = this.overlay.create(this.dropDownService.getOverlayConfig(this.attachToElement))
    this.overlayRef.attach(this.contentTemplate)

    this.backDropClickSubscription = this.overlayRef.backdropClick().subscribe(() => this.onBackDropClick.emit())
  }
  private hide() {
    if (this.overlayRef) {
      this.overlayRef.detach()
    }
    if (this.backDropClickSubscription) {
      this.backDropClickSubscription.unsubscribe()
    }
  }
}