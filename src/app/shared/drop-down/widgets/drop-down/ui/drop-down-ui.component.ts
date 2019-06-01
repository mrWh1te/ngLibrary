import { Component, Input, ViewChild, HostListener, OnInit, OnDestroy, ElementRef } from "@angular/core"

import { OverlayConfig, OverlayRef, Overlay } from '@angular/cdk/overlay'
import { TemplatePortalDirective } from '@angular/cdk/portal'
import { Observable, Subscription } from 'rxjs';
import { map, skip } from 'rxjs/operators';

@Component({
  selector: 'drop-down-ui',
  templateUrl: './drop-down-ui.component.html',
  styleUrls: ['./drop-down-ui.component.scss']
})
export class DropDownUiComponent implements OnInit, OnDestroy {
  @Input() overlayConfig: OverlayConfig
  @Input() open$: Observable<boolean>

  openSubscription: Subscription

  @ViewChild(TemplatePortalDirective, {static: false})
  public contentTemplate: TemplatePortalDirective
  @ViewChild(TemplatePortalDirective, {read: ElementRef, static: false}) contentTemplateElRef: ElementRef

  protected overlayRef: OverlayRef;

  constructor(protected overlay: Overlay) {}

  ngOnInit(): void {
    this.openSubscription = this.open$.pipe(
      skip(1), // skip the initial "false" state, because the UI is already closed, otherwise we'll get an error because this.overlayRef hasn't been initialized yet
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
  }

  public show() {
    this.overlayRef = this.overlay.create(this.overlayConfig);
    this.overlayRef.attach(this.contentTemplate);
    // this.syncWidth();
    // this.overlayRef.backdropClick().subscribe(() => this.hide());
  }

  public hide() {
    this.overlayRef.detach();
  }

  @HostListener('window:resize')
  public onWinResize() {
    this.syncWidth();
  }

  private syncWidth() {
    if (!this.overlayRef) {
      return;
    }
    const refRect = this.contentTemplateElRef.nativeElement.getBoundingClientRect();
    this.overlayRef.updateSize({ width: refRect.width });
  }
}