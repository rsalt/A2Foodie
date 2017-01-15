import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prod-other',
  template: `
              <h3>other template</h3>
            `,
  styles: ['p { color: green; }']
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
