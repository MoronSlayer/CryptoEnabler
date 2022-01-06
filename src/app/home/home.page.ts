import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  walletId: string;

  constructor(
    private router: Router,
  ) {
  }

  async onSearch(ev) {
    this.walletId = ev.target.value;
    await Storage.set({
      key: 'myWalletId',
      value: this.walletId
    });
     this.router.navigateByUrl('/display-assets');
  }
}
