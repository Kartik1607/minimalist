import { Component, OnInit } from '@angular/core';
import { SlideData } from '../slide/slideData';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  data: SlideData[];
  constructor() {
    this.data = [{
      imageUrl: 'assets/hexaware.jpg',
      heading: 'Rebranding a Global IT Giant',
      subHeading: 'Hexaware'
    }, {
      imageUrl: 'assets/sing.jpg',
      heading: 'Hariharan\' Digital Face',
      subHeading: 'Sing with Hariharan'
    }, {
      imageUrl: 'assets/cox.jpg',
      heading: 'Travelling goes Digital',
      subHeading: 'Cox & Kings'
    }];
  }

  ngOnInit() {
  }

}
