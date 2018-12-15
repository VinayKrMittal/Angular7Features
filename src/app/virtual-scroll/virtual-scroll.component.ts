import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {
  numbers : number[]  = [];
  constructor() { 
    for(let i=0;i<1000;i++){
      this.numbers.push(i);
    }
  }

  ngOnInit() {
  }

}
