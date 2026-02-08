// renderers/image.ts
export function renderImage(file: File, setContent: Function) {
    const url = URL.createObjectURL(file);
    setContent({ type: 'image', url });
}
