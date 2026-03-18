declare module "dom-to-image-more" {
  interface Options {
    quality?: number;
    scale?: number;
    filter?: (node: Node) => boolean;
    bgcolor?: string;
    width?: number;
    height?: number;
    style?: Partial<CSSStyleDeclaration>;
  }
  const domtoimage: {
    toJpeg(node: HTMLElement, options?: Options): Promise<string>;
    toPng(node: HTMLElement, options?: Options): Promise<string>;
    toSvg(node: HTMLElement, options?: Options): Promise<string>;
    toBlob(node: HTMLElement, options?: Options): Promise<Blob>;
    toCanvas(node: HTMLElement, options?: Options): Promise<HTMLCanvasElement>;
  };
  export default domtoimage;
}
