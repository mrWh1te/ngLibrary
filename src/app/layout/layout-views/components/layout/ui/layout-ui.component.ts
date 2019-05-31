import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'layout-ui',
  templateUrl: './layout-ui.component.html',
  styleUrls: ['./layout-ui.component.scss']
})
export class LayoutUiComponent {
  @Output() cartClick: EventEmitter<any> = new EventEmitter<any>()
  @Output() logoClick: EventEmitter<any> = new EventEmitter<any>()
}