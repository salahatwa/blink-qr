import { AsyncSubject } from 'rxjs';

import { Templates } from './blinked-qrcode.templates'
import { Options } from './blinked-qrcode.options'
import QRCodeStyling from './qr-styling/qr-styling';
/**
 * drawQrcode
 * @param config
 * @param container
 * @returns
 */
export function drawQrcode(config:Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any) {
    const subject = new AsyncSubject();
    // Reject
    if (!config || !container) {
        subject.error('Container or Config not available!');
        subject.complete();
        return subject;
    }
    ;
    const element = document.createElement("div");
    /**
     * QRCODE_NONE_FRAME
     * @returns
     */
    const QRCODE_NONE_FRAME = () => {
        if (config?.frameOptions) {
            return false;
        }
        else {
            const encodeConfig = () => {
                let deep = config && JSON.parse(JSON.stringify(config)); // deep
                return Object.assign({ data: window.unescape(encodeURIComponent(deep?.data ?? '')) }, deep);
            };
            // removeChild
            while (container.firstChild) {
                container.removeChild(container.lastChild);
            }
            const CR = new QRCodeStyling(encodeConfig());
            // append to container
            CR.append(container);
            return true;
        }
    };
    const styleName = config?.frameOptions?.style ?? 'F_020';
    const height = config?.frameOptions?.height ?? 300;
    const width = config?.frameOptions?.width ?? 300;
    const x = config?.frameOptions?.x ?? 50;
    const y = config?.frameOptions?.y ?? 50;
    /**
     * ADD_FRAME_SVG_TO_ELEMENT
     * @returns
     */
    const ADD_FRAME_SVG_TO_ELEMENT = () => {
        const http = fetch(`https://cdn.jsdelivr.net/gh/id1945/ngx-qrcode-styling/svg/1.2.9/${styleName}.svg`, { method: 'GET' });
        return new Promise((resolve, reject) => {
            http.then(response => response.text()).then(result => {
                if (result !== "404: Not Found") {
                    upgradeSvg(result);
                }
                resolve(result);
            }).catch(error => {
                console.error(error);
                reject(error);
            });
        });
    };
    const upgradeSvg = (result: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(result, "image/svg+xml");
        if (doc) {  
          const svgEl = (doc.documentElement.children as any)?.[styleName + '_svg'];
            if (!svgEl)
                return;
            const textEls = svgEl.getElementsByClassName("frame-text");
            const contentEls = svgEl.getElementsByClassName("frame-content");
            const containerEls = svgEl.getElementsByClassName("frame-container");
            config?.frameOptions?.background && svgEl.setAttribute('style', `background: ${config?.frameOptions?.background};${svgEl?.getAttribute('style')}`);
            const updateStyle = (el: any, config: any) => {
                if (el) {
                    for (const key in config) {
                        if (['x', 'y', 'transform'].includes(key)) {
                            el.setAttribute(key, config && config[key]);
                        }
                        else if (['textContent'].includes(key)) {
                            el[key] = config && config[key];
                        }
                        else {
                            el.style[key] = config && config[key];
                        }
                    }
                }
            };
            const createElementNS = (config: any) => {
                const svgNS = "http://www.w3.org/2000/svg";
                const newText = document.createElementNS(svgNS, "text");
                updateStyle(newText, config);
                svgEl.appendChild(newText);
            };
            if (config?.frameOptions?.texts) {
                [...config.frameOptions.texts].forEach((text, i) => {
                    const el = [...textEls]?.[i];
                    el ? updateStyle(el, text) : createElementNS(text);
                });
            }
            if (config?.frameOptions?.containers) {
                [...containerEls].forEach((el, i) => {
                    updateStyle(el, config?.frameOptions?.containers?.[i]);
                });
            }
            if (config?.frameOptions?.contents) {
                [...contentEls].forEach((el, i) => {
                    updateStyle(el, config?.frameOptions?.contents?.[i]);
                });
            }
            element.appendChild(doc.documentElement);
        }
    };
    /**
     * UPDATE_POSITION_QRCODE_ON_FRAME
     * @returns HTMLElement
     */
    const UPDATE_POSITION_QRCODE_ON_FRAME = () => {
        const after = element.querySelector('.ngx_qrcode_styling_after');
        if (after && config?.zIndex === 1) {
            after?.setAttribute("transform", `translate(${x},${y})`);
            return after;
        }
        const before = element.querySelector('.ngx_qrcode_styling_before');
        before?.setAttribute("transform", `translate(${x},${y})`);
        return before;
    };
    /**
     * UPDATE_ROTATE_SCALE_QRCODE_ON_FRAME
     * @param svg
     * @returns void
     */
    const UPDATE_ROTATE_SCALE_QRCODE_ON_FRAME = (svg: any) => {
        if (svg && config?.rotate) {
            svg?.childNodes?.[0]?.childNodes?.forEach((node: any) => {
                if (node.nodeName === 'rect') {
                    node.style.transformOrigin = `50% 50%`;
                    node.style.transform = `rotate(${config?.rotate ?? 0}deg)`;
                }
            });
        }
        if (svg && config?.scale) {
            svg?.childNodes?.[0]?.childNodes?.forEach((node: any) => {
                if (node.nodeName === 'rect') {
                    node.style.scale = config?.scale ?? 0;
                }
            });
        }
    };
    /**
     * CREATE_QRCODE_INTO_FRAME
     * @param addsvg
     * @returns
     */
    const CREATE_QRCODE_INTO_FRAME = (addsvg: any) => {
        const defaultConfig = () => {
            let deep = config && JSON.parse(JSON.stringify(config)); // deep
            deep = { ...deep, ...{ type: 'svg', data: window.unescape(encodeURIComponent(deep?.data ?? '')) } };
            delete deep.frameOptions;
            delete deep.template;
            return deep;
        };
        // removeChild
        while (container?.firstChild) {
            container.removeChild(container.lastChild);
        }
        const CR = new QRCodeStyling(defaultConfig());
        return CR?._svgDrawingPromise?.then(() => {
            CR.append(addsvg);
        }).catch((error) => console.error(error));
    };
    /**
     * QRCODE_TYPE_SVG
     * @returns
     */
    const QRCODE_TYPE_SVG = () => {
        if (config?.type === 'svg') {
            UPDATE_SIZE_SVG();
            container.appendChild(element);
            return true;
        }
        return false;
    };
    /**
     * CREATE_CANVAS_WITH_SIZE
     * @returns
     */
    const CREATE_CANVAS_WITH_SIZE = () => {
        const canvas = document.createElement('canvas');
        canvas.height = height;
        canvas.width = width;
        container.appendChild(canvas);
        return canvas;
    };
    /**
     * ELEMENT_CONVERT_TO_BASE64
     * @param s1
     * @returns
     */
    const ELEMENT_CONVERT_TO_BASE64 = (s1: any) => {
        let b64 = "data:image/svg+xml;base64,";
        const xml = s1 && new XMLSerializer().serializeToString(s1);
        return b64 += xml && btoa(unescape(encodeURIComponent(xml)));
    };
    /**
     * UPDATE_SIZE_SVG
     * @returns
     */
    const UPDATE_SIZE_SVG = () => {
        const s1 = element.querySelector(`#${styleName}_svg`);
        s1 && s1.setAttribute('height', `${height}px`);
        s1 && s1.setAttribute('width', `${width}px`);
        return s1;
    };
    /**
     * BASE64_TO_BLOB
     * @param base64Image
     * @returns
     */
    const BASE64_TO_BLOB = (base64Image: any) => {
        // Split into two parts
        const parts = base64Image.split(";base64,");
        // Hold the content type
        const imageType = parts[0].split(":")[1];
        // Decode Base64 string
        const decodedData = window.atob(parts[1]);
        // Create UNIT8ARRAY of size same as row data length
        const uInt8Array = new Uint8Array(decodedData.length);
        // Insert all character code into uInt8Array
        for (let i = 0; i < decodedData.length; ++i) {
            uInt8Array[i] = decodedData.charCodeAt(i);
        }
        // Return BLOB image after conversion
        return new Blob([uInt8Array], { type: imageType });
    };
    /**
     * CREATE_IMAGE
     */
    const CREATE_IMAGE = () => {
        const img = new Image();
        const ctx = CREATE_CANVAS_WITH_SIZE().getContext("2d");
        img.onload = function () {
            ctx && ctx.drawImage(img, 0, 0);
        };
        const blob = BASE64_TO_BLOB(ELEMENT_CONVERT_TO_BASE64(UPDATE_SIZE_SVG()));
        const blobUrl = URL.createObjectURL(blob);
        img.src = blobUrl;
    };
    /**
     * MAIN
     */
    (async function () {
        if (QRCODE_NONE_FRAME()) {
            subject.next({ config, container });
            subject.complete();
            return; // Mode qrcode basic
        }
        else {
            await ADD_FRAME_SVG_TO_ELEMENT();
            const ADDSVG = UPDATE_POSITION_QRCODE_ON_FRAME();
            await CREATE_QRCODE_INTO_FRAME(ADDSVG);
            UPDATE_ROTATE_SCALE_QRCODE_ON_FRAME(ADDSVG);
            if (QRCODE_TYPE_SVG()) {
                // Mode qrcode + frame type svg
                subject.next({ config, container });
                subject.complete();
            }
            else {
                // Mode qrcode + frame type canvas
                CREATE_IMAGE();
                subject.next({ config, container });
                subject.complete();
            }
        }
    })();
    return subject;
}
/**
 * defaultTemplate
 * @param config
 * @returns
 */
export const defaultTemplate = (config: any) => {
    let deep = config && JSON.parse(JSON.stringify(config));
    return config?.template ? { ...Templates(config.template.toLocaleLowerCase()), ...deep } : deep;
};
/**
 * deepUpdate
 * @param config
 * @param configUpdate
 * @returns
 */
export const deepUpdate = async (config: any, configUpdate: any) => {
    const origin = config && JSON.parse(JSON.stringify(config));
    let clone = { ...origin, ...configUpdate };
    const keys = ['frameOptions', 'qrOptions', 'imageOptions', 'dotsOptions', 'cornersSquareOptions', 'cornersDotOptions', 'backgroundOptions'];
    for await (const key of keys) {
        if (key in configUpdate) {
            const update = {
                [key]: { ...origin[key], ...configUpdate[key] }
            };
            clone = { ...clone, ...update };
        }
    }
    return clone;
};