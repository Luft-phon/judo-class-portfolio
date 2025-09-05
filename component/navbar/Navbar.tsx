
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "../navbar/navbar.css"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => setMenuOpen((v) => !v);

  return (
    <nav className="sticky inset-x-0 top-0 h-24 bg-white shadow-xl z-50">
      <div className="flex h-full w-full items-center justify-between px-4 2xl:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={75}
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center text-[var(--light-smoke)]">
            <li className="ml-10 text-xl">
              <Link href="/" className="hover:text-[var(--black)]">
                Trang chủ
              </Link>
            </li>
            <li className="ml-10 text-xl">
              <Link href="/about" className="hover:text-[var(--black)]">
                Về chúng tôi
              </Link>
            </li>
            <li className="ml-10 text-xl">
              <Link href="/training" className="hover:text-[var(--black)]">
                Tập Luyện
              </Link>
            </li>
            {/* <li className="ml-10 text-xl">
              <Link href="/about" className="hover:text-[var(--black)]">
                Blog
              </Link>
            </li> */}
            <li className="mx-10 text-xl">
              <Link href="/contact" className="hover:text-[var(--black)]">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile burger */}
        <button
          onClick={handleNav}
          className="md:hidden cursor-pointer pl-24"
          aria-label="Open menu"
        >
          <AiOutlineMenu size={25} />
        </button>

        {/* Mobile drawer */}
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 z-50 h-screen w-[65%] bg-[#ecf0f3] p-10 ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%] top-0 z-50 h-screen w-[65%] p-10 ease-in-out duration-500 md:hidden"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={75}
              className="cursor-pointer"
              priority
            />
            <button onClick={handleNav} className="cursor-pointer" aria-label="Close menu">
              <AiOutlineClose size={25} />
            </button>
          </div>

          <div className="py-4">
            <ul className="flex flex-col border-y">
              <li className="py-4">
                <Link href="/" onClick={handleNav}>
                  Trang chủ
                </Link>
              </li>
              <li className="py-4">
                <Link href="/about" onClick={handleNav}>
                  Về chúng tôi
                </Link>
              </li>
              <li className="py-4">
                <Link href="/training" onClick={handleNav}>
                  Tập luyện
                </Link>
              </li>
              <li className="py-4">
                <Link href="/contact" onClick={handleNav}>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div className="pt-5">
            <div className="flex justify-center gap-10">
              <Link href="https://www.facebook.com/JudoQuanKhu7/" aria-label="Facebook">
                <FaFacebook size={30} />
              </Link>
              <Link href="/about" aria-label="Instagram">
                <FaInstagram size={30} />
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <button
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-gray-100/80 md:hidden"
            onClick={handleNav}
          />
        )}
      </div>
    </nav>
  );
}
