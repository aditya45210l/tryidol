export function ExcelViewer({ data }: { data: any[][] }) {
    return (
        <div className="overflow-auto">
            <table className="border-collapse text-sm">
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className="border px-3 py-1 whitespace-nowrap"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
