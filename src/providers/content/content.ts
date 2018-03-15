import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProvider } from '../user/user';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import * as moment from 'moment';

export const CONTENTS_COLLECTION = 'contents';
export const CATEGORIES_COLLECTION = 'categories';

@Injectable()
export class ContentProvider {

  constructor(
    public userProvider: UserProvider,
    public afFirestore: AngularFirestore,
    public afStorage: AngularFireStorage
  ) { }

  async upload(image, path) {
    const picture = await this.afStorage.ref('contents/' + path + '/' + moment()).putString(image, 'data_url', { contentType: 'image/jpeg' });
    return picture;
  }

  async store(url, path, content?) {
    const timestamp = moment().format('X');

    let result = await this.afFirestore.doc(path).collection(CONTENTS_COLLECTION).add({ imgURL: url, timestamp: timestamp });
    await result.update({ path: result.path })
    return result;
  }

  async retrieveContent(path) {
    const contents = await this.afFirestore.doc(path).collection(CONTENTS_COLLECTION, ref => ref.orderBy('timestamp')).snapshotChanges()
      .map(action => {
        return action.map(c => {
          const data = c.payload.doc.data();
          const id = c.payload.doc.id;
          return { id, ...data, path: c.payload.doc.ref.path };
        })
      });

    return contents;
  }

  async retrieveCategories() {
    const categories = this.afFirestore.collection(CATEGORIES_COLLECTION, ref => ref.orderBy('order')).snapshotChanges()
      .map(action => {
        return action.map(c => {
          const data = c.payload.doc.data();
          const id = c.payload.doc.id;
          return { id, ...data, path: c.payload.doc.ref.path };
        });
      });

    return categories;
  }

  async deleteContent(item) {
    await this.afFirestore.doc(item.path).delete();
  }

  async swapOrder(from, to) {
    const fromTimestamp = from.timestamp;
    const toTimestamp = to.timestamp;

    await this.afFirestore.doc(from.path).update({ timestamp: toTimestamp })
    await this.afFirestore.doc(to.path).update({ timestamp: fromTimestamp })
  }


}
