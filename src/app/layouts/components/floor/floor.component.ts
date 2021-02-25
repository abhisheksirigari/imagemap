import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.block-layout').maphilight();

    setTimeout(() => {
      $('.block-layout').css('background-size', '100% !important');
    }, 500);
  }

}
