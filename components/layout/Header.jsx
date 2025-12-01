"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div
        className="
          mx-auto 
          max-w-[1200px] 
          px-4 
          py-3 
          flex 
          flex-col 
          gap-3 
          md:flex-row 
          md:items-center 
          md:justify-between
        "
      >
        {/* ЛОГОТИП */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={80}
              className="h-16 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* МЕНЮ + КНОПКА */}
        <div
          className="
            flex 
            flex-col 
            gap-2 
            md:flex-row 
            md:items-center 
            md:gap-6
          "
        >
          <nav className="flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-black"
            >
              Главная
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-slate-700 hover:text-black"
            >
              Услуги
            </Link>
            <Link
              href="/contacts"
              className="text-sm font-medium text-slate-700 hover:text-black"
            >
              Контакты
            </Link>
          </nav>

          <button
            className="
              inline-flex 
              items-center 
              justify-center 
              rounded-md 
              bg-amber-400 
              px-4 
              py-2 
              text-sm 
              font-semibold 
              text-black 
              shadow-sm 
              hover:bg-amber-500 
              transition
              whitespace-nowrap
            "
          >
            Записаться
          </button>
        </div>

        {/* ТЕЛЕФОНЫ */}
        <div
          className="
            flex 
            flex-col 
            items-start 
            gap-1 
            text-sm 
            font-semibold 
            text-slate-700 
            md:items-end
          "
        >
          <a href="tel:+70000000000" className="hover:text-black">
            +7 (000) 000-00-00
          </a>
          <a href="tel:+79990000000" className="hover:text-black">
            +7 (999) 000-00-00
          </a>
        </div>
      </div>
    </header>
  );
}
