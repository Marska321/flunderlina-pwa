// components/StoryViewer.tsx
import { useState } from 'react';
import Image from 'next/image';

interface Page { page_number: number; story_text: string; illustration_url: string; }
interface StoryViewerProps { pages: Page[]; names: { name1: string; name2: string }; }

export default function StoryViewer({ pages, names }: StoryViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const page = pages[currentPage];

  const personalizeText = (text: string) => text.replaceAll('[CHILD_NAME_1]', names.name1).replaceAll('[CHILD_NAME_2]', names.name2);

  const goToNextPage = () => setCurrentPage((p) => Math.min(p + 1, pages.length - 1));
  const goToPrevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  return (
    <div className="flex h-screen w-screen flex-col bg-[#0a192f] p-4 text-white md:flex-row">
      <div className="flex flex-1 items-center justify-center p-4">
        <Image src={page.illustration_url} alt={`Illustration for page ${page.page_number}`} className="max-h-full max-w-full rounded-lg object-contain shadow-2xl" width={500} height={500}/>
      </div>
      <div className="flex flex-1 flex-col justify-center p-4 md:p-8">
        <p className="whitespace-pre-wrap text-lg leading-relaxed text-gray-300">{personalizeText(page.story_text)}</p>
        <div className="mt-8 flex justify-between">
          <button onClick={goToPrevPage} disabled={currentPage === 0} className="rounded-full bg-yellow-500 px-6 py-2 font-bold text-[#0a192f] disabled:bg-gray-600">Previous</button>
          <span>Page {currentPage + 1} of {pages.length}</span>
          <button onClick={goToNextPage} disabled={currentPage === pages.length - 1} className="rounded-full bg-yellow-500 px-6 py-2 font-bold text-[#0a192f] disabled:bg-gray-600">Next</button>
        </div>
      </div>
    </div>
  );
}
