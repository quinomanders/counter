import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopUpComponent implements OnInit {
  public counter: boolean;
  public results: boolean;
  public stores: boolean;
  public register: boolean;

  public constructor(private router: Router) { }

  public ngOnInit(): void {
    this.counter = false;
    this.register = false;
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

    if (this.router.url === '/register') {
      this.register = true;
    }
  }

  public togglePopUp() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('show');
  }

  public route() {
    this.router.navigate(['./login']);
  }
}
