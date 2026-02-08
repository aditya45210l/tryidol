// renderers/rtf.ts
export function renderRTF(buffer: ArrayBuffer, setContent: Function) {
    const text = new TextDecoder().decode(buffer);
    setContent({ type: 'rtf', text });
}
