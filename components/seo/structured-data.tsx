import React from 'react';
import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rony B',
    jobTitle: 'Full Stack Developer',
    url: 'https://ronyportfolio.vercel.app/',
    sameAs: [
      'https://github.com/RonyBubnovsky',
      'https://www.linkedin.com/in/rony-bubnovsky-software-developer/',
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'Full Stack Development'
    ],
    skills: [
      'React', 'Next.js', 'JavaScript', 'TypeScript', 
      'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS'
    ]
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
} 