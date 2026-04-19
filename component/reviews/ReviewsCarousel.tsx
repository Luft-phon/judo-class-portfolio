"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

const reviewsData = [
  { image: "/activities/3.jpg" },
  { image: "/activities/30.jpg" },
  { image: "/activities/31.jpg" },
];

export function ReviewsCarousel() {
  const t = useTranslations("Homepage.reviews");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-2">{t("title")}</h2>
              <p className="text-sm font-bold text-[var(--blue)] tracking-widest">
                {t("subtitle")}
              </p>
            </div>

            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#FFD327]" />
              ))}
            </div>

            <div className="relative min-h-[220px] md:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <p className="text-xl md:text-xl font-content leading-relaxed text-gray-700 mb-6">
                    &quot;{t(`items.${currentIndex}.content`)}&quot;
                  </p>
                  <div>
                    <h4 className="text-sm font-heading uppercase text-gray-900">
                      {t(`items.${currentIndex}.name`)}
                    </h4>
                    <p className="text-sm font-content text-gray-500">
                      {t(`items.${currentIndex}.location`)}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4 mt-8">
              <button
                onClick={handlePrev}
                className="p-3 bg-white text-gray-500 rounded-full shadow-sm hover:text-black hover:shadow-md transition-all cursor-pointer z-10"
                aria-label="Previous Review"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-white text-gray-500 rounded-full shadow-sm hover:text-black hover:shadow-md transition-all cursor-pointer z-10"
                aria-label="Next Review"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-md shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={reviewsData[currentIndex].image}
                  alt={`Review ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
