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

    if ((window.location.href).includes('register')) {
      this.register = true;
    }
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

  public togglePopUp() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('show');
  }

  public route() {
    this.router.navigate(['./login']);
  }
}
