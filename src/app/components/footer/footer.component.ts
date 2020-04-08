import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public counter: boolean;
  public results: boolean;
  public stores: boolean;
  public invertedView: boolean;
  public constructor() { }

  public ngOnInit(): void {
    this.counter = false;
    this.results = false;
    this.stores = false;

    if ((window.location.href).includes('results')) {
      this.results = true;
    }
    if ((window.location.href).includes('stores')) {
      this.stores = true;
    }
    if ((window.location.href).includes('counter')) {
      this.counter = true;
    }
  }
}
