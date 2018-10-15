import { Component, OnInit } from '@angular/core';
import { state, style, animate, trigger, transition } from '@angular/animations';




@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('fisu', [
      state('ude', style({
        opacity: 0.0,
        transform: 'translateY(15%)'
      })),
      state('inde', style({
        opacity: 1.0

      })),
      transition('ude => inde', animate('600ms ease-out'))
    ])
  ]
})

export class SliderComponent implements OnInit {

  state = 'ude';
  tmp;
  constructor() { }

  ngOnInit() {
    const rng = Math.random() * 1000;
    this.tmp = setTimeout(() => {
      this.skifter();
    }, rng);
  }

  klikker() {

  }

  skifter() {
    this.state = 'inde';
  }

}
