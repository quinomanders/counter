import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public counter = false;
  public results = false;
  public stores = false;
  public invertedView = false;

  public constructor() { }

  public ngOnInit(): void {
    if ((window.location.href).includes('counter') ||
         window.location.href.includes('results') ||
         window.location.href.includes('stores')) {
      this.invertedView = true;
    }
  }
}
