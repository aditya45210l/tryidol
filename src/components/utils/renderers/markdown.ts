// renderers/markdown.ts
import { marked } from 'marked';

export function renderMarkdown(text: string, setContent: Function) {
    setContent({ type: 'markdown', html: marked(text) });
}
