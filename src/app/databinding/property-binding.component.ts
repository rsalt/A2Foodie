import { Component, Input } from '@angular/core';

@Component({
  selector: 'prod-property-binding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent   {
  @Input() result: number = 0;
}
