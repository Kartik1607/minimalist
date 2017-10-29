import { Component, OnInit, Input } from '@angular/core';
import { SlideData } from '../slide/slideData';

@Component({
  selector: 'app-hover-image',
  templateUrl: './hover-image.component.html',
  styleUrls: ['./hover-image.component.css']
})
export class HoverImageComponent implements OnInit {
  @Input() data: SlideData;
  constructor() { }
  ngOnInit() {
  }

}
