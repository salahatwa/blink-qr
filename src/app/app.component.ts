import { Component } from '@angular/core';
import { BlinkedQrComponent, BlinkedQrService, Options } from 'projects/blinked-qr/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blinked';
  template: any = 'ocean';
  data: any = 'sample data';

  public FE_00X = (style: string, bg: string) => ({
    width: 90,
    height: 90,
    backgroundOptions: {
      color: '#fff0'
    },
    frameOptions: {
      style: style,
      height: 250,
      width: 190,
      x: 5,
      y: 5,
      containers: [{
        fill: bg
      }, {
        fill: bg
      }],
      texts: [{
        textContent: 'Scan Me',
        fill: 'white',
        x: '32%',
        y: '92%',
        fontSize: '7pt',
        fontFamily: 'cursive',
        fontWeight: 'bold'
      }]
    }
  } as Options);

  constructor(private testDI: BlinkedQrService) {
    // test DI!
  }
  /**
  * Download
  */
  onDownload2(qrcode: BlinkedQrComponent): void {
    qrcode.download('file-name.png').subscribe((res) => {
      // TO DO something!
      console.log('download:', res);
    });
  }


  /**
 * Update
 */
  public onUpdate(qrcode: BlinkedQrComponent): void {
    qrcode
      .update(qrcode.config, {
        frameOptions: {
          height: 400 + 300,
          width: 325 + 300,
        },
      })
      .subscribe((res) => {
        // TO DO something!
        console.log('update:', res);
        console.log('Element:', res.container.querySelector(qrcode.config.type == 'svg' ? 'svg' : 'canvas'));
      });
  }

  /**
   * Download
   */
  onDownload(qrcode: BlinkedQrComponent): void {
    qrcode.download('test').subscribe((res) => {
      // TO DO something!
      console.log('download:', res);
    });
  }


}
