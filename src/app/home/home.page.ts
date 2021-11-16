import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  walletId: string;

  constructor(
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController
  ) {}

  async onSearch(ev) {
    this.walletId = ev.target.value;
    await this.storage.create();
    //setting a key(myWalletId) - value(walletId) pair to store the wallet id.
    await this.storage.set('myWalletId', this.walletId);
    await this.navCtrl.navigateForward(['/display-assets']);
     this.router.navigateByUrl('/display-assets');
  }
}
