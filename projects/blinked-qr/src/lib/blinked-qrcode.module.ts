import { NgModule } from '@angular/core';
import { BlinkedQrComponent } from './blinked-qrcode.component';
import { BlinkedQrService } from './blinked-qrcode.service';

@NgModule({
  declarations: [
    BlinkedQrComponent
  ],
  exports: [
    BlinkedQrComponent
  ],
  providers: [
    BlinkedQrService
  ]
})
export class BlinkedQrModule { }
