
/// <reference types="vite/client" />

declare module 'pdf-lib' {
  export class PDFDocument {
    static create(): Promise<PDFDocument>;
    static load(data: ArrayBuffer | Uint8Array): Promise<PDFDocument>;
    addPage(size?: [number, number]): any;
    getPages(): any[];
    getPage(index: number): any;
    copyPages(srcDoc: PDFDocument, indices: number[]): Promise<any[]>;
    insertPage(index: number, page: any): void;
    removePage(index: number): void;
    save(): Promise<Uint8Array>;
    getPageCount(): number;
    getPageIndices(): number[];
    embedPdf(data: ArrayBuffer | Uint8Array): Promise<any>;
    embedFont(font: any): Promise<any>;
    embedJpg(data: ArrayBuffer | Uint8Array): Promise<any>;
    embedPng(data: ArrayBuffer | Uint8Array): Promise<any>;
    embedPages(pages: any[]): Promise<any[]>;
    
    // Document metadata methods
    setTitle(title: string): void;
    setSubject(subject: string): void;
    setCreator(creator: string): void;
    setProducer(producer: string): void;
    setCreationDate(date: Date): void;
    getTitle(): string | undefined;
    getAuthor(): string | undefined;
    getSubject(): string | undefined;
    getCreator(): string | undefined;
    getProducer(): string | undefined;
    getCreationDate(): Date | undefined;
    getModificationDate(): Date | undefined;
    getKeywords(): string[] | undefined;
  }
  
  export const PageSizes: {
    A4: [number, number];
    Letter: [number, number];
  };
  
  export const StandardFonts: {
    Helvetica: any;
    HelveticaBold: any;
    TimesRoman: any;
    TimesRomanBold: any;
    Courier: any;
    CourierBold: any;
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
