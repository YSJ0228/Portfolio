'use client';

import ScrollAnimation from '@/components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function About() {
  const frontendSkills = [
    'TypeScript',
    'React',
    'Next.js',
    'JavaScript',
    'TailwindCSS',
    'SCSS',
    'React Query',
    'Zustand',
  ];

  const backendSkills = [
    'Node.js',
    'Express',
    'PostgreSQL',
    'Prisma',
    'Jest',
  ];

  const deploySkills = [
    'AWS EC2',
    'AWS S3',
    'AWS RDS',
  ];

  const tools = [
    'Git',
    'GitHub',
    'Notion',
  ];

  const education = [
    {
      school: '한서대학교',
      major: '항공소프트웨어공학과',
      status: '졸업',
      period: '2021.03 - 2025.02',
    },
    {
      school: '경기과학기술대학교',
      major: '자동차과',
      status: '졸업',
      period: '2019.03 - 2021.02',
    },
  ];

  const training = [
    {
      name: '코드잇 클라우드 풀스택 엔지니어 부트캠프',
      status: '수료',
      period: '2025.01 - 2025.08',
      description: 'Javascript, React, Typescript, Next.js, Git, AWS 등 프론트엔드와 백엔드 개발에 필요한 실무 역량을 습득하고, 약 7개월간 3개의 팀 프로젝트를 통해 서비스 기획부터 배포까지의 전 과정을 수행했습니다. React Query, JWT 인증, Prisma ORM, Jest 테스트 등 프로젝트 기반 학습을 통해 실무 기술 스택을 활용하는 경험을 쌓았습니다.',
    },
  ];

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed mb-3 sm:mb-4 px-4">
              사용자 경험을 개선하며 가치를 만들어내는 프론트엔드 개발자입니다.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed px-4">
              React와 TypeScript를 활용해 사용자 경험을 개선하고, Next.js의 SSR을 통해 성능을 최적화하며,
              Lighthouse를 통한 성능 측정 및 개선으로 사용자 접근성을 향상시켜왔습니다.
              복잡한 상태 관리와 UX 개선을 통해 사용자 만족도를 높이는 것에 관심이 있으며,
              단순한 기능 구현을 넘어 사용자의 관점을 고려하여 더 나은 서비스를 만들기 위해 노력합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800">
              Skills
            </h2>
          </ScrollAnimation>
          
          <div className="space-y-12">
            {/* Frontend Skills */}
            <ScrollAnimation>
              <div>
                <h3 className="text-3xl md:text-3xl font-bold mb-6 text-gray-800">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:shadow-lg transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Backend Skills */}
            <ScrollAnimation delay={0.1}>
              <div>
                <h3 className="text-3xl md:text-3xl font-bold mb-6 text-gray-800">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:shadow-lg transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Deploy Skills */}
            <ScrollAnimation delay={0.2}>
              <div>
                <h3 className="text-3xl md:text-3xl font-bold mb-6 text-gray-800">Deploy</h3>
                <div className="flex flex-wrap gap-3">
                  {deploySkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:shadow-lg transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Tools */}
            <ScrollAnimation delay={0.3}>
              <div>
                <h3 className="text-3xl md:text-3xl font-bold mb-6 text-gray-800">Tools & Collaboration</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:shadow-lg transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-800">
              Education
            </h2>
          </ScrollAnimation>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{edu.school}</h3>
                      <p className="text-xl md:text-2xl text-gray-900 font-semibold">{edu.major}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <span className="text-lg md:text-xl text-gray-600 block">{edu.status}</span>
                      <span className="text-lg md:text-xl text-gray-600">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-800">
              Training
            </h2>
          </ScrollAnimation>
          
          <div className="space-y-8">
            {training.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{item.name}</h3>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <span className="text-lg md:text-xl text-gray-600 block">{item.status}</span>
                      <span className="text-lg md:text-xl text-gray-600">{item.period}</span>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-800">
              개발 철학
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                title: '사용자 중심',
                icon: '👥',
                description: '항상 사용자의 입장에서 생각하며 직관적인 UX를 제공합니다.',
              },
              {
                title: '코드 품질',
                icon: '💎',
                description: '깔끔하고 유지보수 가능한 코드를 작성하는 것을 추구합니다.',
              },
              {
                title: '지속적 학습',
                icon: '📚',
                description: '새로운 기술과 트렌드를 배우고 적용하며 성장합니다.',
              },
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="text-7xl mb-4">{item.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed flex-grow">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
