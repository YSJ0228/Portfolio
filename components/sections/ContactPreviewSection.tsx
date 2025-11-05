'use client';

import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function ContactPreviewSection() {
  return (
    <section className="min-h-screen md:h-screen snap-start flex items-center justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-4xl mx-auto w-full text-center">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            새로운 프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든지 연락주세요!
          </p>
          <Link
            href="/contact"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-900 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transition-all inline-block hover:scale-105"
          >
            연락하기
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}
