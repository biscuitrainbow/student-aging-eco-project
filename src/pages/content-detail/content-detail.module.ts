import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentDetailPage } from './content-detail';

@NgModule({
  declarations: [
    ContentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentDetailPage),
  ],
})
export class ContentDetailPageModule {}
