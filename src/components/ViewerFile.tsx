import { ExcelViewer } from "./ExcelViewer";
import { PDFViewer } from "./PdfViewer";

import type { RenderedContent } from "@/App";

export function Viewer({ content }: { content: RenderedContent | null }) {
    if (!content) {
        return
    }

    switch (content.type) {
        case "pdf":
            if (!content.pages || content.pages.length === 0) {
                return <p>Preparing PDF preview…</p>;
            }
            return <PDFViewer pages={content.pages as unknown as HTMLCanvasElement[]} />;


        case "excel":
            return <ExcelViewer data={content.data} />;

        case "docx":
        case "markdown":
            return (
                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: content.html }}
                />
            );

        case "rtf":
            return <pre className="whitespace-pre-wrap">{content.text}</pre>;

        case "image":
            return <img src={content.url} className="max-w-full h-full" />;

        default:
            return null;
    }
}
