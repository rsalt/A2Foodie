import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prod-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is stringInterpolation@databinding example';
  numberInterpolation = 2;

  onTest(){
    return true;
  }

  onClicked(value: string){
    alert(value);
  }
}
