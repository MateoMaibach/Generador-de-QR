
import { Injectable } from '@angular/core';
import * as QRCode from 'qrcode';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  private qrCodeDataUrl: string = '';

  async generateQR(url: string): Promise<void> {
    try {
      this.qrCodeDataUrl = await QRCode.toDataURL(url);
    } catch (err) {
      console.error('Error generating QR Code: ', err);
    }
  }

  downloadQR(): void {
    saveAs(this.qrCodeDataUrl, 'qr-code.png');
  }

  getQrCodeDataUrl(): string {
    return this.qrCodeDataUrl;
  }
}
