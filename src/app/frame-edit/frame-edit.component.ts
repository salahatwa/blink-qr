import { Component } from '@angular/core';
import { Options } from 'projects/blinked-qr/src/public-api';

@Component({
  selector: 'app-frame-edit',
  templateUrl: './frame-edit.component.html',
  styleUrls: ['./frame-edit.component.css']
})
export class FrameEditComponent {

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
}
