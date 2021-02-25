import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.block-layout').maphilight();

    setTimeout(() => {
      $('.block-layout').css('background-size', '100% !important');
    }, 500);
  }

}


