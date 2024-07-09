
import { Component } from '@angular/core';
import { QrService } from '../services/qr.service';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css'],
})
export class QrGeneratorComponent {
  url: string = '';
  qrGenerated: boolean = false;

  constructor(private qrService: QrService) {}

  async generateQR(): Promise<void> {
    if (this.url.trim() !== '') {
      await this.qrService.generateQR(this.url.trim());
      this.qrGenerated = true;
    }
  }

  downloadQR(): void {
    this.qrService.downloadQR();
  }

  get qrCodeDataUrl(): string {
    return this.qrService.getQrCodeDataUrl();
  }
}
