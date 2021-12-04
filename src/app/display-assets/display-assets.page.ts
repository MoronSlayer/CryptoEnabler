/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-display-assets',
  templateUrl: './display-assets.page.html',
  styleUrls: ['./display-assets.page.scss'],
})
export class DisplayAssetsPage implements OnInit {

  walletId: string;

  constructor(
    private storage: Storage
  ) {
  }

  ngOnInit() {
  //Initializes the methods whenever user lands on the page.
    this.assestApiHit();
  }

  assestApiHit() {
    //Receiving the set parameter from home page.
    this.storage.get('myWalletId').then((data) => {
      this.walletId = data;
      const options = {method: 'GET'};
    // method to get data from api and dsiplay repson in jsoon format
      fetch(
        'https://api.opensea.io/api/v1/assets?owner='+ this.walletId +'&order_direction=desc&offset=0&limit=20',
        options
        )
      .then(response => response.json())
      .then(response => response.assets)
      .then(response => this.appendData(response))

      .catch(err => console.error(err));
    });
  }

  // appendData(data) {
  //   const mainContainer = document.getElementById('myData');
  //   for (let i = 0; i < data.length; i++) {
  //       const div = document.createElement('div');
  //       div.innerHTML = 'NFT: ' + data[i].token_id + '     ' + data[i].asset_contract.name;
  //       mainContainer.appendChild(div);
  //       const img = document.createElement('img');
  //       img.setAttribute('src', data[i].image_url);
  //       mainContainer.appendChild(img);
  //   }
  // }  
  appendData(data) {
    // console.log(data);
    const mainContainer = document.getElementById('myData');
    for (let i = 0; i < data.length; i++) {
        const NFT_item = document.createElement('ion-list');
        const NFT_card = document.createElement('ion-item');
        NFT_item.appendChild(NFT_card);
        const thumbnail = document.createElement('ion-avatar');  
        thumbnail.setAttribute('slot','start');      
        NFT_card.appendChild(thumbnail);
        // div.innerHTML = 'NFT: ' + data[i].token_id + '     ' + data[i].asset_contract.name;
        mainContainer.appendChild(NFT_card);
        const img = document.createElement('img');        
        img.setAttribute('src', data[i].image_url);
        thumbnail.appendChild(img);
        const NFT_content_header = document.createElement('p');
        NFT_content_header.setAttribute('class','info');
        // NFT_content_header.setAttribute('slot','end');
        const NFT_end = document.createElement('p');
        NFT_end.setAttribute('class','info');
        NFT_end.setAttribute('slot','end');
        NFT_content_header.innerHTML = data[i].asset_contract.name + '\n' +'<br>' + 'NFT: ' + data[i].token_id 
        // const NFT_token_id =document.createElement('p');
        // NFT_token_id.setAttribute('slot','end');
        // NFT_token_id.innerHTML = 'NFT: ' + data[i].token_id 
        // NFT_card.appendChild(NFT_content_header);
        NFT_end.appendChild(NFT_content_header);
        NFT_card.appendChild(NFT_end);
        // NFT_card.appendChild(NFT_token_id);
    }
};


}
