import { LoadingController, ToastController, Loading } from "ionic-angular";

export class BasePage {
    public loader: Loading;

    constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

    }

    showLoading(msg) {
        this.loader = this.loadingCtrl.create({
            content: msg
        });

        this.loader.present();
    }

    hideLoading() {
        this.loader.dismiss();
    }

    showToast(msg) {
        const toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
        })

        toast.present();
    }
}