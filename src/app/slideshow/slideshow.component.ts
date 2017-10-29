import { Component, OnInit } from '@angular/core';
import {SlideData} from '../slide/slideData';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  data: SlideData[];
  constructor() {
    this.data = [{
      imageUrl: 'assets/coke.png',
      heading: 'Coke at Work',
      subHeading: 'Coca-Cola'
    }, {
      imageUrl: 'assets/madhuri.jpg',
      heading: 'Bollywood\'s Dancing Queen',
      subHeading: 'Madhuri Dixit'
    }, {
      imageUrl: 'assets/xiomi.jpg',
      heading: 'Launching the Real Smartphone',
      subHeading: 'Xiomi'
    }, {
      imageUrl: 'assets/infotech.jpg',
      heading: 'Space Design, India HQ',
      subHeading: 'L&T Infotech'
    }, {
      imageUrl: 'assets/bloomberg.jpg',
      heading: 'Budget 2017',
      subHeading: 'Bloomberg'
    }];
  }

  ngOnInit() {
  }

}
