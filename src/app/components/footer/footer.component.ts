import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public counter: boolean;
  public results: boolean;
  public stores: boolean;

  public constructor(private router: Router) { }

  public ngOnInit(): void {
    this.counter = false;
    this.results = false;
    this.stores = false;

    if (this.router.url === '/counter') {
      this.counter = true;
    }

    if (this.router.url === '/results') {
      this.results = true;
    }

    if (this.router.url === '/stores') {
      this.stores = true;
    }
  }
}
