import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BlinkedQrModule } from 'projects/blinked-qr/src/public-api';

// import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
import { AppComponent } from './app.component';
import { FrameEditComponent } from './frame-edit/frame-edit.component';
import { FramesComponent } from './frames/frames.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameEditComponent,
    FramesComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    BlinkedQrModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
