import { Component } from '@angular/core';

@Component({
  selector: 'prod-two-way-binding',
  template: `
    <input type="text" [(ngModel)] = "person.name">
    <input type="text" [(ngModel)] = "person.name">
  `,
  styles: []
})
export class TwoWayBindingComponent {
  person = {
    name: 'Rahul',
    age: 25
  };
}
