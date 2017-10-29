import { Component, OnInit, Input } from '@angular/core';
import {SlideData} from './slideData';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() data: SlideData;
  constructor() {
    console.log('Data is ' + this.data);
  }

  ngOnInit() {
  }

}
