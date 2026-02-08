# Offline Document Viewer

This project is a 100% offline-first document viewer that runs entirely in the browser. It allows you to view various document formats without uploading them to a server, ensuring your privacy.

## 🎯 Key Features

- **📂 Unified Multi-Format Support:** View a wide range of document formats in one place.
- **🛡️ Privacy-First Architecture:** All file processing happens locally in your browser. No data is ever sent to a server.
- **⚡ Pro-Level Performance:** Optimized rendering and virtualization for a smooth user experience, even with large files.

## Screenshots

*(Add screenshots of the application here)*

## Technologies Used

- **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **File Processing:**
  - **Word (.docx):** [mammoth.js](https://github.com/mwilliamson/mammoth.js)
  - **Excel (.xlsx, .xls):** [SheetJS/xlsx](https://github.com/SheetJS/sheetjs)
  - **PDF (.pdf):** [pdf.js](https://github.com/mozilla/pdf.js)
  - **Markdown (.md):** [marked](https://github.com/markedjs/marked)
- **Virtualization:** [react-window](https://github.com/bvaughn/react-window)

## Supported Formats

The application supports the following file formats:

- PDF (`.pdf`)
- Excel (`.xlsx`, `.xls`)
- Word (`.docx`)
- RTF (`.rtf`)
- Markdown (`.md`)
- Images (`.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.bmp`, `.webp`)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

### Running the Development Server

To start the development server, run:

```bash
pnpm dev
```

This will start the application on `http://localhost:5173`.

## Project Structure

The project is structured as follows:

```
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── utils/
│   │   │   └── renderers/          # File rendering logic for each file type
│   │   ├── ExcelViewer.tsx         # Component for rendering Excel files
│   │   ├── PdfViewer.tsx           # Component for rendering PDF files
│   │   ├── ViewerFile.tsx          # Main viewer component that selects the correct renderer
│   │   └── ...
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx                     # Main application component
│   └── main.tsx                    # Entry point
├── index.html
├── package.json
└── vite.config.ts
```

## File Processing Flow

1.  **File Upload:** The user selects a file using the `FileUpload` component.
2.  **File Type Detection:** The `processFile` utility function determines the file type based on its extension.
3.  **Content Rendering:** The appropriate renderer function from `src/components/utils/renderers/` is called to process the file.
4.  **State Update:** The rendered content is stored in the `App` component's state.
5.  **Display:** The `ViewerFile` component receives the rendered content and displays it using the corresponding viewer component (`PDFViewer`, `ExcelViewer`, etc.).

## How It Works

The application uses a combination of client-side libraries to render different file formats:

- **Word (`.docx`):** `mammoth` is used to convert `.docx` files into HTML.
- **Excel (`.xlsx`, `.xls`):** `xlsx` is used to parse Excel files and render them as tables. `react-window` is used for virtualization to efficiently display large datasets.
- **PDF (`.pdf`):** `pdfjs-dist` is used to render PDF files onto `<canvas>` elements.
- **Markdown (`.md`):** `marked` is used to convert Markdown into HTML.
- **RTF (`.rtf`):** A simple `TextDecoder` is used to display the raw text content of `.rtf` files.
- **Images:** `URL.createObjectURL` is used to display images.

When a user uploads a file, the application determines the file type and uses the appropriate renderer to display the content. The entire process happens in the browser, and no files are ever uploaded to a server.

## Deployment

The application can be easily deployed to [Vercel](https://vercel.com/).

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.
