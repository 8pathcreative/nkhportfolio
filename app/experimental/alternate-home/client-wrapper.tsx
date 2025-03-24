"use client";

import dynamic from 'next/dynamic';

const AlternateHome = dynamic(() => import('../alternate-home'), {
  ssr: false,
});

export default function ClientWrapper() {
  return <AlternateHome />;
} 