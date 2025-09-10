/// <reference types="vite/client" />

declare module 'pdf-lib' {
  export class PDFDocument {
    static create(): Promise<PDFDocument>;
    static load(data: ArrayBuffer | Uint8Array): Promise<PDFDocument>;
    addPage(size?: [number, number]): any;
    getPages(): any[];
    copyPages(srcDoc: PDFDocument, indices: number[]): Promise<any[]>;
    insertPage(index: number, page: any): void;
    removePage(index: number): void;
    save(): Promise<Uint8Array>;
    getPageCount(): number;
    embedPdf(data: ArrayBuffer | Uint8Array): Promise<any>;
  }
  export const PageSizes: {
    A4: [number, number];
    Letter: [number, number];
  };
  export const degrees: (deg: number) => number;
  export const rgb: (r: number, g: number, b: number) => any;
}

declare module 'qrcode' {
  export function toDataURL(text: string, options?: any): Promise<string>;
  export function toCanvas(canvas: HTMLCanvasElement, text: string, options?: any): Promise<void>;
  export function toString(text: string, options?: any): Promise<string>;
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}