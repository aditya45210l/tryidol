export function PDFViewer({
    pages,
}: {
    pages?: HTMLCanvasElement[];
}) {
    if (!pages || pages.length === 0) {
        return <p className="text-muted-foreground">Loading PDF…</p>;
    }

    return (
        <div className="flex flex-col gap-6">
            {pages.map((page, index) => (
                <canvas
                    key={index}
                    ref={(el) => {
                        if (el) {
                            el.width = page.width;
                            el.height = page.height;
                            el.getContext("2d")!.drawImage(page, 0, 0);
                        }
                    }}
                />
            ))}
        </div>
    );
}
