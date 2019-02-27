import {Component, OnInit} from '@angular/core';
import {serializePaths} from "@angular/router/src/url_tree";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail: string = 'Password is Budapest';
  clickCount: number = 0;
  clickCountArray: number[] = [];
  isColored: boolean = false;
  showDetail: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  onDisplayDetails() {
    this.clickCount++;
    console.log("Click Count: " + this.clickCount);
    this.clickCountArray.push(this.clickCount);
    this.showDetail = !this.showDetail;
  }

  getColor() {
    if (this.clickCount >= 5) {
      this.isColored = true;
    }
    if (this.isColored) {
      return 'blue';
    }
    return 'white';
  }
}
