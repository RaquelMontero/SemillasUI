import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {
  slides = [
    { 'image': '../../../../assets/carru/im5.jpg' },
    { 'image': '../../../../assets/carru/im4.jpg' },
    { 'image': '../../../../assets/carru/im3.jpg' },
    { 'image': '../../../../assets/carru/im2.jpg' },
    { 'image': '../../../../assets/carru/im1.jpg' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
