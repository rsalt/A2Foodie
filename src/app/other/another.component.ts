import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prod-another',
  template: `
 
    <p>
      another template!
    </p>
    <div>
        <h2>Hello</h2>
        <ng-content></ng-content>
        <p>World</p>
    </div>
    
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
