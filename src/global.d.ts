declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.mp4' {
  const exports: string;
  export default exports;
}
declare module '*.png' {
  const exports: string;
  export default exports;
}
declare module '*.gif' {
  const exports: string;
  export default exports;
}
