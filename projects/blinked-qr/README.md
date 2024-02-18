# blinked-qr

This library is built for the purpose generating QR codes with a logo and styling.\
Demo on the [Stackblitz](https://stackblitz.com/edit/angular-blinked-qr?file=src/app/app.component.ts) or [Codesandbox](https://codesandbox.io/s/blinked-qr-vlvvi?file=/src/app/app.component.ts)\
Generating styled QRcodes [Online](https://qr-code-styling.com/)

![base](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr.png)

![frames](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr-frames-01.png)
![frames](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr-frames-02.png)
![frames](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr-frames-03.png)
![frames](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr-frames-04.png)
![frames](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr-frames-05.png)
![frames](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr-frames-06.png)
![frames](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr-frames-07.png)
![frames](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr-frames-08.png)
![frames](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr-frames-09.png)
![frames](https://raw.githubusercontent.com/id1945/blinked-qr/main/blinked-qr-frames-10.png)

## Installation
Install `blinked-qr` from `npm`:
```bash
npm install blinked-qr --save
```

Add wanted package to NgModule imports:
```typescript
import { NgxQrcodeStylingModule } from 'blinked-qr';

@NgModule({
    imports: [
        NgxQrcodeStylingModule
    ]
})
```

Add component to your page:
```typescript
import { Options } from 'blinked-qr';

export class AppComponent {
  public config: Options = {
    width: 300,
    height: 300,
    data: "https://www.facebook.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    margin: 5,
    dotsOptions: {
      color: "#1977f3",
      type: "dots"
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0
    }
  };
}
```

```html
<blinked-qr [config]="config"></blinked-qr>
```
Or
```html
<blinked-qr
  #qrcode
  [config]="config" 
  [type]="'canvas'"
  [shape]="'square'"
  [width]="200"
  [height]="200"
  [margin]="5"
  [data]="'Angular QRCode'"
  [image]="'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'">
</blinked-qr>
```
```typescript
import { NgxQrcodeStylingComponent, Options } from 'blinked-qr';

export class AppComponent {
    @ViewChild('qrcode', { static: false }) public qrcode!: NgxQrcodeStylingComponent;

    onUpdate(): void {
        this.qrcode.update(this.qrcode.config, {
          // height: 300,
          // width: 300,
          frameOptions: {
            height: 600,
            width: 600,
          },
          ...
        }).subscribe((res) => {
          // TO DO something!
        });
    }
    
    onDownload(): void {
        this.qrcode.download("file-name.png").subscribe((res) => {
          // TO DO something!
        });
    }
}
```
Or
```html
<div #canvas></div>
```
```typescript
import { NgxQrcodeStylingService, Options } from 'blinked-qr';

export class AppComponent implements AfterViewInit {
    @ViewChild("canvas", { static: false }) canvas: ElementRef;
    public config: Options = {...};
    
    constructor(private qrcode: NgxQrcodeStylingService) {}

    ngAfterViewInit(): void {
        // Create QRCode by Service and ElementRef 
        this.qrcode.create(this.config, this.canvas.nativeElement).subscribe((res) => {
          // TO DO something!
        });
    }
}
```
Or 
```html
<div id="canvas"></div>
```
```typescript
import { NgxQrcodeStylingService, Options } from 'blinked-qr';

export class AppComponent implements AfterViewInit {
    public config: Options = {...};
    
    constructor(private qrcode: NgxQrcodeStylingService) {}
   
    ngAfterViewInit(): void {
        // Create QRCode by Service and HTMLElement 
        this.qrcode.create(this.config, document.getElementById('canvas')).subscribe((res) => {
          // TO DO something!
        });
    }
}
```


<details><summary><b>Using a template</b></summary>

```typescript
import { Options } from 'blinked-qr';

export class AppComponent {
    public config: Options = {
        template: 'bitcoin',
        ...
    }
}
```
Or
```html
<blinked-qr [template]="'bitcoin'" [data]="'blinked-qr'"></blinked-qr>
```
  
</details>

<details><summary><b>Using a frame</b></summary>
  
```typescript
import { Options } from 'blinked-qr';

export class AppComponent {
    public config: Options = {
        frameOptions: {
              style: 'style36',
              width: 300,
              height: 300,
              x: 50,
              y: 50
        }
        ...
    }
}
```
Or
```html
<blinked-qr
  [template]="'bitcoin'"
  [data]="'blinked-qr'"
  [width]="280"
  [height]="280"
  [image]="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/60px-BTC_Logo.svg.png'"
  [frameOptions]="{style: 'style36', height: 300, width: 300, x: 60, y: 60}">
</blinked-qr>
```
</details>

### API Documentation

#### Input

<details><summary><b>frameOptions</b></summary>

Property               |Type                     |Default Value|Description
-----------------------|-------------------------|-----------|-----------------------------------------------------
type                   |string (`canvas`, `svg`)|`'canvas'`   |The type of the element that will be rendered
shape                  |string (`square`, `circle`)|`'square'`      |The type of the element that will be rendered
width                  |number                  |`300`      |Size of canvas
height                 |number                  |`300`      |Size of canvas
margin                 |number                  |`0`        |Margin around canvas
data                   |string                  |           |The date will be encoded to the QR code
image                  |string                  |           |The image will be copied to the center of the QR code
template               |string (`classic`, `ocean`, `sunflower`, `luxury`, `bitcoin`, `starbucks`, `angular`, `facebook`, `jungle`, `green`, `sky`, `mosaic`, `coffee`, `vintage`, `stamp`, `chess`)           | `'classic'`     | The design of the element that will be rendered
frameOptions              |object                   |               |Options will be passed to `qrcode-generator` lib
qrOptions              |object                   |           |Options will be passed to `qrcode-generator` lib
imageOptions           |object                   |           |Specific image options, details see below
dotsOptions            |object                   |           |Dots styling options
cornersSquareOptions   |object                   |           |Square in the corners styling options
cornersDotOptionsHelper|object                   |           |Dots in the corners styling options
backgroundOptions      |object                   |           |QR background styling options

</details>

#### Models in Config

<details><summary><b>Options</b></summary>

```typescript
export declare type Options = {
    type?: DrawType;
    shape?: ShapeType;
    width?: number;
    height?: number;
    margin?: number;
    data?: string;
    image?: string;
    template?: string;
    frameOptions?: {
        style?: string;
        height?: number;
        width?: number;
        x?: number;
        y?: number;
    };
    qrOptions?: {
        typeNumber?: TypeNumber;
        mode?: Mode;
        errorCorrectionLevel?: ErrorCorrectionLevel;
    };
    imageOptions?: {
        hideBackgroundDots?: boolean;
        imageSize?: number;
        crossOrigin?: string;
        margin?: number;
    };
    dotsOptions?: {
        type?: DotType;
        color?: string;
        gradient?: Gradient;
    };
    cornersSquareOptions?: {
        type?: CornerSquareType;
        color?: string;
        gradient?: Gradient;
    };
    cornersDotOptions?: {
        type?: CornerDotType;
        color?: string;
        gradient?: Gradient;
    };
    backgroundOptions?: {
        round?: number;
        color?: string;
        gradient?: Gradient;
    };
};
```

</details>

#### Model Details

<details><summary><b>frameOptions</b></summary>

Property            |Type                                              |Default Value
--------------------|--------------------------------------------------|-------------
style               |string(`style1`, ... `style150`)                  |`'style1'`
width               |number(`0 - max`)                                 |`300`
height              |number(`0 - max`)                                 |`300`
x                   |number(`0 - max`)                                 |`50`
y                   |number(`0 - max`)                                 |`50`

</details>

<details><summary><b>qrOptions</b></summary>

Property            |Type                                              |Default Value
--------------------|--------------------------------------------------|-------------
typeNumber          |number (`0 - 40`)                                 |`0`
mode                |string (`'Numeric' 'Alphanumeric' 'Byte' 'Kanji'`)|
errorCorrectionLevel|string (`'L' 'M' 'Q' 'H'`)                        |`'Q'`

</details>

<details><summary><b>imageOptions</b></summary>

Property          |Type                                   |Default Value|Description
------------------|---------------------------------------|-------------|------------------------------------------------------------------------------
hideBackgroundDots|boolean                                |`true`       |Hide all dots covered by the image
imageSize         |number                                 |`0.4`        |Coefficient of the image size. Not recommended to use ove 0.5. Lower is better
margin            |number                                 |`0`          |Margin of the image in px
crossOrigin       |string(`'anonymous' 'use-credentials'`)|             |Set "anonymous" if you want to download QR code from other origins.

</details>

<details><summary><b>dotsOptions</b></summary>

Property|Type                                                                          |Default Value|Description
--------|------------------------------------------------------------------------------|-------------|-------------------
color   |string                                                                        |`'#000'`     |Color of QR dots
gradient|object                                                                        |             |Gradient of QR dots
type    |string (`'rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded'`)|`'square'`   |Style of QR dots

</details>

<details><summary><b>backgroundOptions</b></summary>

Property|Type  |Default Value
--------|------|-------------
color   |string|`'#fff'`
gradient|object|

</details>

<details><summary><b>cornersSquareOptions</b></summary>

Property|Type                                     |Default Value|Description
--------|-----------------------------------------|-------------|-----------------
color   |string                                   |             |Color of Corners Square
gradient|object                                   |             |Gradient of Corners Square
type    |string (`'dot' 'square' 'extra-rounded'`)|             |Style of Corners Square

</details>

<details><summary><b>cornersDotOptions</b></summary>

Property|Type                     |Default Value|Description
--------|-------------------------|-------------|-----------------
color   |string                   |             |Color of Corners Dot
gradient|object                   |             |Gradient of Corners Dot
type    |string (`'dot' 'square'`)|             |Style of Corners Dot

</details>

<details><summary><b>Gradient</b></summary>

`dotsOptions.gradient`

`backgroundOptions.gradient`

`cornersSquareOptions.gradient`

`cornersDotOptions.gradient`

Property  |Type                        |Default Value|Description
----------|----------------------------|-------------|---------------------------------------------------------
type      |string (`'linear' 'radial'`)|"linear"     |Type of gradient spread
rotation  |number                      |0            |Rotation of gradient in radians (Math.PI === 180 degrees)
colorStops|array of objects            |             |Gradient colors. Example `[{ offset: 0, color: 'blue' }, {  offset: 1, color: 'red' }]`

</details>

<details><summary><b>Gradient colorStops</b></summary>

`dotsOptions.gradient.colorStops[]`

`backgroundOptions.gradient.colorStops[]`

`cornersSquareOptions.gradient.colorStops[]`

`cornersDotOptions.gradient.colorStops[]`

Property|Type            |Default Value|Description
--------|----------------|-------------|-----------------------------------
offset  |number (`0 - 1`)|             |Position of color in gradient range
color   |string          |             |Color of stop in gradient range

</details>

#### Support versions
  
<table>
  <tr>
    <th colspan="2">Support versions</th>
  </tr>
  <tr>
    <td>Angular 9</td>
    <td>1.1.0</td>
  </tr>
  <tr>
    <td>Angular 8</td>
    <td>1.0.13</td>
  </tr>
</table>

#### Author Information
  
<table>
  <tr>
    <th colspan="2">Author Information</th>
  </tr>
  <tr>
    <td>Author</td>
    <td>DaiDH</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>+84845882882</td>
  </tr>
</table>

![Vietnam](https://raw.githubusercontent.com/id1945/blinked-qr/main/vietnam.gif)

[MIT License](https://github.com/id1945/blinked-qr/blob/main/LICENSE). Copyright (c) 2021 DaiDH