"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error("이메일 설정이 완료되지 않았습니다.", {
          description: "관리자에게 문의해주세요.",
        });
        console.error("EmailJS keys are missing.");
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      toast.success("메시지가 전송되었습니다!", {
        description: "빠른 시일 내에 답변 드리겠습니다.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      toast.error("메시지 전송에 실패했습니다.", {
        description: "잠시 후 다시 시도해주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "yunsejun3@gmail.com",
      link: "mailto:yunsejun3@gmail.com",
    },
    {
      icon: "💼",
      label: "GitHub",
      value: "github.com/YSJ0228",
      link: "https://github.com/YSJ0228",
    },
    {
      icon: "💬",
      label: "LinkedIn",
      value: "linkedin.com/in/세준-윤-272746397",
      link: "https://www.linkedin.com/in/%EC%84%B8%EC%A4%80-%EC%9C%A4-272746397/",
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent">
              Contact
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              새로운 프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든지
              연락주세요!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <ScrollAnimation>
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                    메시지 보내기
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    빠르고 간편하게 연락주세요
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      이름
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-gray-900 transition-all outline-none text-gray-900 placeholder:text-gray-400"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-gray-900 transition-all outline-none text-gray-900 placeholder:text-gray-400"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      메시지
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-gray-900 transition-all outline-none resize-none text-gray-900 placeholder:text-gray-400"
                      placeholder="메시지를 입력해주세요"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.02,
                      y: isSubmitting ? 0 : -2,
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full px-8 py-4 rounded-xl font-semibold transition-all shadow-lg ${
                      isSubmitting
                        ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                        : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl"
                    } mt-6`}
                  >
                    {isSubmitting ? "전송 중..." : "전송하기"}
                  </motion.button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  연락처 정보
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  아래의 연락처를 통해 직접 연락하실 수도 있습니다. 빠른 응답을
                  위해 이메일을 권장합니다.
                </p>

                <div className="space-y-6 mb-8">
                  {contacts.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
                    >
                      <div className="text-4xl">{contact.icon}</div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {contact.label}
                        </p>
                        <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    응답 시간
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    일반적으로 24시간 이내에 응답드리도록 하겠습니다. 급한
                    문의사항이 있으시다면 이메일로 연락주세요.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              함께 만들어요
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              새로운 도전과 협업을 기다리고 있습니다. 여러분의 아이디어를
              실현하기 위해 함께 노력하겠습니다.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/projects"
                className="px-8 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-full font-semibold hover:shadow-lg transition-all"
              >
                프로젝트 보기
              </Link>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
