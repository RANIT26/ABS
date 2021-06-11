import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs/public-api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  tabLoadTimes: Date[] = [];
  checkFlag: boolean = true;
  constructor() { }

  ngOnInit() { }

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    return this.tabLoadTimes[index];
  }

  tabChangeEvent(event: MatTabChangeEvent) {
    console.log(event.index, "index");
  }

}
