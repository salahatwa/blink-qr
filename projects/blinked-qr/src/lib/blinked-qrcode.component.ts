import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AsyncSubject } from 'rxjs';

import {
  CornerDotType,
  CornerSquareType,
  DotType,
  DrawType,
  ErrorCorrectionLevel,
  FrameStyle,
  Gradient,
  Mode,
  Options,
  ShapeType,
  TemplateType,
  TypeNumber,
  UnknownObject,
} from './blinked-qrcode.options';
import { BlinkedQrService } from './blinked-qrcode.service';

@Component({
  selector: 'blinked-qr',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class BlinkedQrComponent implements OnInit {

  /**
   * Options
   */
  @Input()
  public config!: Options;

  /**
   * TemplateType
   */
  @Input()
  public template: TemplateType = 'default';

  /**
   * DrawType
   */
  @Input()
  public type!: DrawType;

  /**
   * ShapeType
   */
  @Input()
  public shape!: ShapeType;

  /**
  * number
  */
  @Input()
  public width!: number;

  /**
 * number
 */
  @Input()
  public scale!: number;

  /**
   * number
   */
  @Input()
  public rotate!: number;

  /**
   * number
   */
  @Input()
  public height!: number;

  /**
   * number
   */
  @Input()
  public margin!: number;

  @Input()
  public zIndex!: number;

  /**
   * string
   */
  @Input()
  public data!: string;

  /**
   * string
   */
  @Input()
  public image!: string;

  /**
   * object
   */
  @Input()
  public frameOptions!: {
    style?: FrameStyle;
    height?: number;
    width?: number;
    x?: number;
    y?: number;
    background?: string;
    texts?: UnknownObject[];
    contents?: UnknownObject[];
    containers?: UnknownObject[];
  };

  /**
   * object
   */
  @Input()
  qrOptions!: {
    typeNumber?: TypeNumber;
    mode?: Mode;
    errorCorrectionLevel?: ErrorCorrectionLevel;
  };

  /**
   * object
   */
  @Input()
  imageOptions!: {
    hideBackgroundDots?: boolean;
    imageSize?: number;
    crossOrigin?: string;
    margin?: number;
  };

  /**
   * object
   */
  @Input()
  dotsOptions!: {
    type?: DotType;
    color?: string;
    gradient?: Gradient;
  };

  /**
   * object
   */
  @Input()
  cornersSquareOptions!: {
    type?: CornerSquareType;
    color?: string;
    gradient?: Gradient;
  };

  /**
   * object
   */
  @Input()
  cornersDotOptions!: {
    type?: CornerDotType;
    color?: string;
    gradient?: Gradient;
  };

  /**
   * object
   */
  @Input()
  backgroundOptions!: {
    round?: number;
    color?: string;
    gradient?: Gradient;
  };

  constructor(
    private canvas: ElementRef,
    private service: BlinkedQrService
  ) { }

  ngOnInit() {
    if (this.canvas) {
      /**
       * @Input override
       */
      if (this.template)
        this.config = {
          ...this.config,
          template: this.template
        };
      if (this.type)
        this.config = {
          ...this.config,
          type: this.type
        };
      if (this.shape)
        this.config = {
          ...this.config,
          shape: this.shape
        };
      if (this.width)
        this.config = {
          ...this.config,
          width: this.width
        };
      if (this.height)
        this.config = {
          ...this.config,
          height: this.height
        };
      if (this.margin)
        this.config = {
          ...this.config,
          margin: this.margin
        };
      if (this.data)
        this.config = {
          ...this.config,
          data: this.data
        };
      if (this.image)
        this.config = {
          ...this.config,
          image: this.image
        };
      if (this.scale)
        this.config = {
          ...this.config,
          scale: this.scale
        };
      if (this.rotate)
        this.config = {
          ...this.config,
          rotate: this.rotate
        };
      if (this.zIndex)
        this.config = {
          ...this.config,
          zIndex: this.zIndex
        };
      if (this.frameOptions)
        this.config = {
          ...this.config,
          frameOptions: this.frameOptions
        };
      if (this.qrOptions)
        this.config = {
          ...this.config,
          qrOptions: this.qrOptions
        };
      if (this.imageOptions)
        this.config = {
          ...this.config,
          imageOptions: this.imageOptions
        };
      if (this.dotsOptions)
        this.config = {
          ...this.config,
          dotsOptions: this.dotsOptions
        };
      if (this.cornersSquareOptions)
        this.config = {
          ...this.config,
          cornersSquareOptions: this.cornersSquareOptions
        };
      if (this.cornersDotOptions)
        this.config = {
          ...this.config,
          cornersDotOptions: this.cornersDotOptions
        };
      if (this.backgroundOptions)
        this.config = {
          ...this.config,
          backgroundOptions: this.backgroundOptions
        };
      this.create(this.config);
    }
  }

  /**
   * create
   * @param config 
   * @returns 
   */
  public create(config: Options): AsyncSubject<any> {
    return this.service.create(config, this.canvas.nativeElement);
  }

  /**
   * update
   * @param config 
   * @param configUpdate 
   * @returns 
   */
  public update(config: Options, configUpdate: Options): AsyncSubject<any> {
    // console.log(config);
    return this.service.update(config, configUpdate, this.canvas.nativeElement);
  }


  // ngOnChanges(changes: SimpleChanges) {
  //   // console.log(changes);

  //   /**
  //    * @Input override
  //    */
  //   if (this.template)
  //     this.config = {
  //       ...this.config,
  //       template: this.template
  //     };

  //   if (this.type)
  //     this.config = {
  //       ...this.config,
  //       type: this.type
  //     };

  //   if (this.shape)
  //     this.config = {
  //       ...this.config,
  //       shape: this.shape
  //     };

  //   if (this.width)
  //     this.config = {
  //       ...this.config,
  //       width: this.width
  //     };

  //   if (this.height)
  //     this.config = {
  //       ...this.config,
  //       height: this.height
  //     };

  //   if (this.margin)
  //     this.config = {
  //       ...this.config,
  //       margin: this.margin
  //     };

  //   if (this.data)
  //     this.config = {
  //       ...this.config,
  //       data: (window as any).unescape(encodeURIComponent(this.data))
  //     };

  //   if (this.image)
  //     this.config = {
  //       ...this.config,
  //       image: this.image
  //     };

  //   if (this.frameOptions)
  //     this.config = {
  //       ...this.config,
  //       frameOptions: this.frameOptions
  //     };

  //   if (this.qrOptions)
  //     this.config = {
  //       ...this.config,
  //       qrOptions: this.qrOptions
  //     };

  //   if (this.imageOptions)
  //     this.config = {
  //       ...this.config,
  //       imageOptions: this.imageOptions
  //     };

  //   if (this.dotsOptions)
  //     this.config = {
  //       ...this.config,
  //       dotsOptions: this.dotsOptions
  //     };

  //   if (this.cornersSquareOptions)
  //     this.config = {
  //       ...this.config,
  //       cornersSquareOptions: this.cornersSquareOptions
  //     };

  //   if (this.cornersDotOptions)
  //     this.config = {
  //       ...this.config,
  //       cornersDotOptions: this.cornersDotOptions
  //     };

  //   if (this.backgroundOptions)
  //     this.config = {
  //       ...this.config,
  //       backgroundOptions: this.backgroundOptions
  //     };
  //   this.service.update(this.config, this.config, this.canvas.nativeElement);
  // }

  /**
   * download image
   * @param fileName eg: demo.png
   * @param timeout 
   * @returns 
   */
  public download(fileName: string, timeout = 100): AsyncSubject<any> {
    return this.service.download(fileName, this.canvas.nativeElement, timeout);
  }

  /**
  * download image
  * @param fileName eg: demo.png
  * @param timeout 
  * @returns 
  */
  public getBase64(fileName: string, timeout = 100): AsyncSubject<any> {
    return this.service.getBase64(fileName, this.canvas.nativeElement, timeout);
  }
}
