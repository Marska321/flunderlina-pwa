// components/PersonalizationForm.tsx
import { useState } from 'react';

export default function PersonalizationForm({ onSubmit }: { onSubmit: (name1: string, name2: string) => void; }) {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name1 && name2) onSubmit(name1, name2);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#0a192f] p-4 text-white">
      <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col items-center gap-6">
        <h2 className="font-cinzel mb-4 text-center text-4xl">Who is joining the adventure?</h2>
        <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} placeholder="First adventurer's name..." className="w-full rounded-md border-2 border-yellow-500/50 bg-indigo-800 p-3 text-center text-lg focus:border-yellow-500 focus:outline-none" required />
        <input type="text" value={name2} onChange={(e) => setName2(e.target.value)} placeholder="Second adventurer's name..." className="w-full rounded-md border-2 border-yellow-500/50 bg-indigo-800 p-3 text-center text-lg focus:border-yellow-500 focus:outline-none" required />
        <button type="submit" className="mt-4 rounded-full bg-yellow-500 px-8 py-3 font-bold text-[#0a192f] transition-transform duration-300 hover:scale-105 disabled:bg-gray-600" disabled={!name1 || !name2}>
          Create Our Story
        </button>
      </form>
    </div>
  );
}