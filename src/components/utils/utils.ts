import { renderPDF } from './renderers/pdf';
import { renderExcel } from './renderers/excel';
import { renderDocx } from './renderers/docx';
import { renderMarkdown } from './renderers/markdown';
import { renderRTF } from './renderers/rtf';
import { renderImage } from './renderers/image';

export async function processFile(
    file: File,
    setContent: Function
) {
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext) return;

    const reader = new FileReader();

    return new Promise<void>((resolve, reject) => {
        reader.onload = async () => {
            const result = reader.result;
            if (!result) return reject();

            try {
                switch (ext) {
                    case "pdf":
                        await renderPDF(result as ArrayBuffer, setContent);
                        break;

                    case "xlsx":
                    case "xls":
                        renderExcel(result as ArrayBuffer, setContent);
                        break;

                    case "docx":
                        await renderDocx(result as ArrayBuffer, setContent);
                        break;

                    case "md":
                        renderMarkdown(result as string, setContent);
                        break;

                    case "rtf":
                        renderRTF(result as ArrayBuffer, setContent);
                        break;

                    default:
                        if (file.type.startsWith("image/")) {
                            renderImage(file, setContent);
                        }
                }

                resolve();
            } catch (e) {
                reject(e);
            }
        };

        if (["md", "txt"].includes(ext)) {
            reader.readAsText(file);
        } else {
            reader.readAsArrayBuffer(file);
        }
    });
}
