/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

import { Storage } from '@capacitor/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-assets',
  templateUrl: './display-assets.page.html',
  styleUrls: ['./display-assets.page.scss'],
})
export class DisplayAssetsPage implements OnInit {

  walletId: string;
  url;
  openSeaApiResponse;
  titleName;
  avatarUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
  //Initializes the methods whenever user lands on the page.
    this.assestApiHit();
  }

  async assestApiHit() {
    //Receiving the set parameter from home page.
    await Storage.get({
      key:'myWalletId'
    }).then((data) =>{
      this.walletId = data.value;
      this.url = 'https://api.opensea.io/api/v1/assets?owner='+ this.walletId +'&order_direction=desc&offset=0&limit=20';
    });
    this.http.get(this.url).subscribe((data) => {
      this.openSeaApiResponse = data;
      //console.log(this.openSeaApiResponse.assets[0].collection.name);
      this.displayPortfolio();
    });
  }

  displayPortfolio() {
    this.titleName = this.openSeaApiResponse.assets[0].collection.name;
    this.avatarUrl = this.openSeaApiResponse.assets[0].collection.image_url;
  }
}
