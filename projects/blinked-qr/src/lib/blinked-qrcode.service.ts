import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

import { deepUpdate, defaultTemplate, drawQrcode } from './blinked-qrcode.helper';
import { Options } from './blinked-qrcode.options';

@Injectable({
  providedIn: 'root'
})
export class BlinkedQrService {

  /**
    * create
    * @param config 
    * @param container 
    * @returns 
    */
  public create(config: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any): AsyncSubject<any> {
    return drawQrcode(defaultTemplate(config), container);
  }

  /**
   * update
   * @param config 
   * @param configUpdate 
   * @param container 
   * @returns 
   */
  public update(config: Options, configUpdate: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any): AsyncSubject<any> {
    const subject = new AsyncSubject();
    (async function () {
      const conf = await deepUpdate(defaultTemplate(config), defaultTemplate(configUpdate));
      drawQrcode(conf, container).subscribe(s => {
        subject.next(s);
        subject.complete();
      });
    })();
    return subject;
  }

  /**
   * download image
   * @param fileName eg: demo.png
   * @param container 
   * @param timeout 
   * @returns 
   */
  public download(fileName: string, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any, timeout = 100): AsyncSubject<any> {
    const subject = new AsyncSubject();
    setTimeout(() => {
      const canvas = container?.querySelector('canvas')
      const dataURL = canvas?.toDataURL(`image/${fileName?.split('.')?.slice(-1)?.toString()}`);
      const link = document.createElement('a');
      link.download = fileName;
      link.href = dataURL;
      link.click();
      subject.next({ fileName, container });
      subject.complete();
    }, timeout);
    return subject;
  }


  /**
   * download image
   * @param fileName eg: demo.png
   * @param container 
   * @param timeout 
   * @returns 
   */
  public getBase64(fileName: string, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any, timeout = 100): AsyncSubject<any> {
    const subject = new AsyncSubject();
    setTimeout(() => {
      const canvas = container?.querySelector('canvas')
      const dataURL = canvas?.toDataURL(`image/${fileName?.split('.')?.slice(-1)?.toString()}`);

      subject.next({ dataURL });
      subject.complete();
    }, timeout);
    return subject;
  }

  /**
   * download image
   * @param fileName eg: demo.png
   * @param container
   * @param timeout
   * @returns
   */
  download2(container: any, fileName = '', timeout = 0) {
    const subject = new AsyncSubject();
    const _fileName = (type: any) => {
      if (!fileName) {
        fileName = `ngx_qrcode_styling_${Date.now()}.${type}`;
      }
    };
    const _download = (dataURL: any) => {
      const link = document.createElement('a');
      link.download = fileName;
      link.href = dataURL;
      link.click();
      link.remove();
    };
    const _complete = (url: any) => {
      if (url) {
        _download(url);
        subject.next({ fileName, container, url: url });
        subject.complete();
      }
      else {
        subject.error('Container not found!');
        subject.complete();
      }
    };
    setTimeout(() => {
      const canvas = container?.querySelector('canvas');
      if (canvas) {
        _fileName('png');
        const typeImg = fileName ? fileName?.split('.')?.slice(-1)?.toString() : 'png';
        canvas.toBlob((blob: any) => _complete(URL.createObjectURL(blob)), 'image/' + typeImg);
      }
      else {
        const svg = container?.querySelector('svg');
        if (svg) {
          _fileName('svg');
          const svgData = svg.outerHTML;
          const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
          const svgUrl = URL.createObjectURL(svgBlob);
          _complete(svgUrl);
        }
        else {
          _complete('');
        }
      }
    }, timeout);
    return subject;
  }
}
