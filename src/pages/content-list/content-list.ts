import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentDetailPage } from '../content-detail/content-detail';
import { AngularFirestore } from 'angularfire2/firestore';
import { CameraProvider } from '../../providers/camera/camera';
import { ContentProvider } from '../../providers/content/content';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-content-list',
  templateUrl: 'content-list.html',
})
export class ContentListPage {

  public content;
  public pickedImage;
  public showFab;

  public contents: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cameraProvider: CameraProvider,
    public contentProvider: ContentProvider
  ) {
    this.content = navParams.get('content');
  }

  async ionViewDidLoad() {
    this.contents = await this.contentProvider.retrieveContent(this.content.path);
  }

  showDetail(item) {
    this.navCtrl.push(ContentListPage, { content: item });
  }


  async pickImage() {
    try {
      this.pickedImage = await this.cameraProvider.pickImage();
      const picture = await this.contentProvider.upload(this.pickedImage, this.content.text);
      await this.contentProvider.store(picture.downloadURL, this.content.path);
    } catch (error) {
      console.log(error);
    }
  }





}
