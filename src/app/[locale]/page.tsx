"use client";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Home() {
  const tHero = useTranslations('pages.home.hero');
  const tFeatures = useTranslations('pages.home.features');

  let features: string[] = [];
  try {
    const featuresData = tFeatures.raw('features');
    if (Array.isArray(featuresData)) {
      features = featuresData;
    }
  } catch (error) {
    console.error('Erro ao obter features:', error);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br bg-black">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        {tHero('title')}
      </motion.h1>
      <p className="mb-8 text-lg text-center">{tHero('subtitle')}</p>
      {features.length > 0 && (
        <ul className="mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="text-base">• {feature}</li>
          ))}
        </ul>
      )}
      <Link
        href="https://github.com/Jonhvmp/template-i18n"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        {tHero('cta')}
        <ArrowRightIcon className="w-5 h-5" />
      </Link>
    </main>
  );
}
