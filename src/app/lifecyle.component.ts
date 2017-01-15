import { 
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'prod-lifecyle',
  template: `
    <p>
      lifecyle Works!
    </p>
  `,
  styles: []
})
export class LifecyleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnChanges(){
    this.log("Ng OnChanges");
  }

  ngOnInit() {
    this.log("Ng ngOnInit");
  }

  ngDoCheck(){
    this.log("Ng ngDoCheck");
  }

  ngAfterContentInit(){
    this.log("Ng ngAfterContentInit");
  }
  
  ngAfterContentChecked(){
    this.log("Ng ngAfterContentChecked");
  }

  ngAfterViewInit(){
    this.log("Ng ngAfterViewInit");
  }
  ngAfterViewChecked(){
    this.log("Ng ngAfterViewChecked");
  }
  ngOnDestroy(){
    this.log("Ng ngOnDestroy");
  }

  private log(hook: string){
    console.log(hook);
  }

}
