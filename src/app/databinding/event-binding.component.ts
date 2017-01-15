import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'prod-event-binding',
  template: `
    <button (click)="onClicked()">Click Me!</button>
  `,
  styles: []
})
export class EventBindingComponent   {
  @Output('clickable') clicked = new EventEmitter<string>();
  onClicked(value: string){
    this.clicked.emit(value);
  }
}
