import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Base64 } from '@ionic-native/base64';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Injectable()
export class CameraProvider {

  constructor(public camera: Camera, public base64: Base64) { }

  async pickImage() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    const imageData = await this.camera.getPicture(options);
    const base64Image = 'data:image/jpeg;base64,' + imageData;
    
    return base64Image;
  }

}
