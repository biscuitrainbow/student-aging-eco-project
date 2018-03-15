import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, ToastController } from 'ionic-angular';
import { ContentDetailPage } from '../content-detail/content-detail';
import { AngularFirestore } from 'angularfire2/firestore';
import { CameraProvider } from '../../providers/camera/camera';
import { ContentProvider } from '../../providers/content/content';
import { Observable } from 'rxjs/Observable';
import { BasePage } from '../base';
import { UserProvider } from '../../providers/user/user';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-content-list',
  templateUrl: 'content-list.html',
})
export class ContentListPage extends BasePage {

  public content;
  public pickedImage;

  public isLoading = false;
  public isEmpty = false;
  public isAdmin = false;

  public loader: Loading;

  public contents: Observable<any[]>;
  public contentArray = [];

  public userObservable: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cameraProvider: CameraProvider,
    public contentProvider: ContentProvider,
    public userProvider: UserProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public youtube: YoutubeVideoPlayer
  ) {
    super(loadingCtrl, toastCtrl)
    this.content = navParams.get('content');
  }

  async ionViewDidLoad() {
    try {
      this.contents = await this.contentProvider.retrieveContent(this.content.path);
      console.log(JSON.stringify(this.content.type));

      this.contents.subscribe(contents => {
        this.isEmpty = contents.length === 0
        this.isLoading = false;
        this.contentArray = contents;
      });

      this.userObservable = await this.userProvider.retrieveUserData();
      this.userObservable.subscribe(user => this.isAdmin = user.isAdmin);

    } catch (error) {
      console.log(error);
    }
  }

  showDetail(item) {
    if (item.videoURL) this.youtube.openVideo(item.videoURL);
    else this.navCtrl.push(ContentListPage, { content: item });
  }


  async pickImage() {
    try {
      this.showLoading("กำลังประมวลผลรูปภาพ...");
      this.pickedImage = await this.cameraProvider.pickImage();
      this.hideLoading();

      this.showLoading("กำลังอัพโหลดรูปภาพ...");
      const picture = await this.contentProvider.upload(this.pickedImage, this.content.text);
      await this.contentProvider.store(picture.downloadURL, this.content.path);
      this.hideLoading();

      this.showToast("อัพโหลดรูปภาพสำเร็จ")
    } catch (error) {
      this.hideLoading();
    }
  }

  async delete(item) {
    await this.contentProvider.deleteContent(item);
  }

  reorderItems(indexes) {
    try {
      this.contentProvider.swapOrder(
        this.contentArray[indexes.from],
        this.contentArray[indexes.to]
      )
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }







}
