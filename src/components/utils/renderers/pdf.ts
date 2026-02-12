// renderers/pdf.ts
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;


export async function renderPDF(buffer: ArrayBuffer, setContent: Function) {
    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
    console.log("PDF pages:", pdf.numPages);

    const pages: HTMLCanvasElement[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.3 });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: ctx, viewport, canvas }).promise;
        pages.push(canvas);
    }

    console.log("Rendered canvases:", pages.length); // 👈 MUST > 0

    setContent({ type: "pdf", pages });
}
