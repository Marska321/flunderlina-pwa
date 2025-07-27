// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import PersonalizationForm from '@/components/PersonalizationForm';
import StoryViewer from '@/components/StoryViewer';
import { supabase } from '@/lib/supabaseClient';

interface Page { page_number: number; story_text: string; illustration_url: string; }

export default function Home() {
  const [step, setStep] = useState('welcome');
  const [pages, setPages] = useState<Page[]>([]);
  const [names, setNames] = useState({ name1: '', name2: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStoryPages = async () => {
      const { data, error } = await supabase.from('story_pages').select('*').order('page_number');
      if (error) console.error('Error fetching story pages:', error);
      else if (data) setPages(data);
      setIsLoading(false);
    };
    fetchStoryPages();
  }, []);

  const handleBegin = () => setStep('form');
  const handleSubmitNames = (name1: string, name2: string) => {
    setNames({ name1, name2 });
    setStep('story');
  };

  if (isLoading) return <div className="flex h-screen items-center justify-center bg-[#0a192f] text-white font-cinzel text-2xl">Loading the cosmos...</div>;
  if (step === 'welcome') return <WelcomeScreen onBegin={handleBegin} />;
  if (step === 'form') return <PersonalizationForm onSubmit={handleSubmitNames} />;
  if (step === 'story') return <StoryViewer pages={pages} names={names} />;
  return null;
}