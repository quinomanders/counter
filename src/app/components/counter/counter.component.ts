import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public count = 0;
  public minCount = 0;
  public maxCount = 64;

  public constructor() { }

  public ngOnInit(): void {
  }

  public addNumber(): void {
    this.count = this.count + 1;
  }

  public reduceNumber(): void {
    this.count = this.count - 1;
  }
}
