import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  now: Date;

  constructor() { }

  ngOnInit() {
    this.now = new Date();

    setInterval(() => {

      this.now = new Date();

    }, 1000);
  }

}
