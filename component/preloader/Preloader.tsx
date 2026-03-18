"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [fadePreloader, setFadePreloader] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Xử lý hiệu ứng fade in chổi logo
    const logoTimeout = setTimeout(() => {
      setShowLogo(true);
    }, 100); // hiện nhanh logo sau khi tải

    // Xử lý hiệu ứng fade out cho toàn bộ preloader
    const preloaderTimeout = setTimeout(() => {
      setFadePreloader(true);
    }, 2000); // thay đổi thời gian này để tăng/giảm thời gian hiển thị intro

    // Gỡ khỏi DOM hoàn toàn
    const removeTimeout = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(logoTimeout);
      clearTimeout(preloaderTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ease-out ${fadePreloader ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <div
        className={`relative transition-all duration-1000 ease-out flex flex-col items-center justify-center ${showLogo ? "opacity-100 scale-100" : "opacity-0 scale-95 md:scale-90"
          }`}
      >
        <Image
          src={Logo}
          alt="Judo Logo"
          width={250}
          height={180}
          priority
          className="w-48 md:w-64"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-outfit text-2xl md:text-4xl tracking-[0.2em] uppercase font-light mt-4 text-black"
        >
          Judo Quân Khu 7
        </motion.p>
        <motion.div
          className="absolute -bottom-2 left-0 h-[1px] bg-black/20"
          initial={{ width: 0, left: "50%" }}
          animate={{ width: "100%", left: "0%" }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
