// glasses.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glasses',
  templateUrl: 'glasses.page.html',
  styleUrls: ['glasses.page.scss'],
})
export class GlassesPage {
  constructor(private router: Router) {}

  goToNext() {
    this.router.navigateByUrl('/next-page');
  }
}
