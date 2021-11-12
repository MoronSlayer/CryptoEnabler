import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayAssetsPage } from './display-assets.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayAssetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayAssetsPageRoutingModule {}
