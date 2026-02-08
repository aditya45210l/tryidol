import { useState } from "react";
import FileUpload from "./components/kokonutui/file-upload"
import { processFile } from "./components/utils/utils";
import { Viewer } from "./components/ViewerFile";
import { Dialog } from "./components/ui/dialog";
import { ScrollArea } from "./components/ui/scroll-area";
import { ThemeProvider } from "@/components/theme-provider"

import {
  DialogClose,
  DialogContent,
  DialogFooter,
} from '@/components/ui/dialog';
import { useDirection } from "@radix-ui/react-direction";
import { Button } from "./components/ui/button";
// import DialogDemo from "./components/dialog/fullscreen";


export type RenderedContent =
  | { type: 'pdf'; pages: ImageBitmap[] }
  | { type: 'excel'; data: any[][] }
  | { type: 'docx'; html: string }
  | { type: 'rtf'; text: string }
  | { type: 'markdown'; html: string }
  | { type: 'image'; url: string };

const App = () => {
  const [content, setContent] = useState<RenderedContent | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  async function handleUploadSuccess(file: File) {

    try {
      await processFile(file, setContent); // ⏳ WAIT
      setDialogOpen(true);                       // ✅ OPEN AFTER READY
    } catch {
      console.error("Failed to render file");
    }
  }

  const direction = useDirection();


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='flex justify-center items-center h-dvh w-full dark'>
        <FileUpload onUploadSuccess={(file) => handleUploadSuccess(file)} />
        {/* <Dialog open={false}>
        <ScrollArea>
          <Viewer content={content} />
        </ScrollArea>
      </Dialog> */}
        {
          dialogOpen && (<Dialog open={dialogOpen}>
            {/* <DialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </DialogTrigger> */}
            <DialogContent className="p-0" variant="fullscreen" dir={direction}>
              {/* <DialogHeader className="pt-5 pb-3 m-0 border-b border-border">
          <DialogTitle className="px-6 text-base">Frequently Asked Questions(FAQ)</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader> */}
              <ScrollArea className="text-sm h-full my-3 ps-6 pe-5 me-1">
                <div className="space-y-4 border-8 [&_h3]:font-semibold [&_h3]:text-foreground">
                  {/* {faqSections.map((faq, index) => (
              <div key={index} className="text-accent-foreground space-y-1">
                <h3>{faq.title}</h3>
                <p>{faq.content}</p>
              </div>
            ))} */}
                  <Viewer content={content} />

                </div>
              </ScrollArea>
              <DialogFooter className="px-6 py-4 border-t border-border">
                <DialogClose asChild>
                  <Button type="button" className="cursor-pointer" onClick={() => setDialogOpen(false)}>Ok</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>)
        }
      </div>
    </ThemeProvider>
  )
}

export default App