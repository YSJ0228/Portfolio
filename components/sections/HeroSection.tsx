'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

function ProfileImage3D({ variants }: { variants: any }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['20deg', '-20deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-20deg', '20deg']);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center md:justify-end md:-mt-12"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative max-w-xl md:max-w-2xl"
      >
        <Image
          src="/profile_image.png"
          alt="프로필 사진"
          width={700}
          height={700}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="min-h-screen md:h-screen snap-start flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* 왼쪽: 텍스트 콘텐츠 */}
          <div className="text-center md:text-left">
            <motion.div
              variants={childVariants}
              className="inline-block mb-6 px-6 py-3 bg-gray-900 text-white rounded-full text-base font-bold shadow-lg"
            >
              Frontend Developer
            </motion.div>
            <motion.h1
              variants={childVariants}
              className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-black bg-clip-text text-transparent leading-tight"
            >
              안녕하세요
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
            >
              사용자 경험을 개선하며<br />
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                가치를 만들어내는 개발자입니다
              </span>
            </motion.p>
            <motion.p
              variants={childVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              현대적인 웹 기술로 의미있는 서비스를 만들고, 사용자 중심의 직관적인 인터페이스를 설계합니다.
            </motion.p>
          </div>

          {/* 오른쪽: 프로필 사진 (3D Tilt Effect) */}
          <ProfileImage3D variants={childVariants} />
        </motion.div>
      </div>
    </section>
  );
}
 