import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayAssetsPageRoutingModule } from './display-assets-routing.module';

import { DisplayAssetsPage } from './display-assets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayAssetsPageRoutingModule
  ],
  declarations: [DisplayAssetsPage]
})
export class DisplayAssetsPageModule {}
