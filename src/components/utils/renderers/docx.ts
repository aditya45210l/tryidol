import mammoth from "mammoth";

export async function renderDocx(
    buffer: ArrayBuffer,
    setContent: Function
) {
    const result = await mammoth.convertToHtml(
        { arrayBuffer: buffer },
        {
            styleMap: [
                "p[style-name='Title'] => h1",
                "p[style-name='Heading 1'] => h1",
                "p[style-name='Heading 2'] => h2",
                "p[style-name='Heading 3'] => h3",
                "p[style-name='Quote'] => blockquote",
                "p[style-name='Normal'] => p",
                "r[style-name='Strong'] => strong",
                "r[style-name='Emphasis'] => em",
            ],
        }
    );

    setContent({ type: "docx", html: result.value });
}
