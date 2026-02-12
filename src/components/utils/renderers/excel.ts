// renderers/excel.ts
import * as XLSX from 'xlsx';

export function renderExcel(buffer: ArrayBuffer, setContent: Function) {
    const wb = XLSX.read(buffer, { type: 'array' });
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    setContent({ type: 'excel', data });
}
