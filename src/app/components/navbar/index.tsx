"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isRootRoute = pathname === "/";

  return (
    <div className={`${montserrat.className} antialised text-center text-5xl`}>
      <div
        className={`navbar font-semibold z-10 text-white fixed w-full inset-x-0 top-0 flex justify-between items-center z-50 ${
          isScrolled ? "bg-slate-600" : ""
        } ${isScrolled && "opacity-50"}`}
        style={{ backgroundColor: isRootRoute ? "" : "#161C2D" }}
      >
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
              style={{ backgroundColor: "#22c55e", zIndex: 0 }}
            >
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/equipo">Nuestro equipo</Link>
              </li>
              <li>
                <a>Caracteristicas</a>
                <ul className="p-2">
                  <li>
                    <Link href="/precios">Precios</Link>
                  </li>
                  <li>
                    <Link href="/soporte">Soporte</Link>
                  </li>
                  <li>
                    <Link href="/marketing-digital">Marketing Digital</Link>
                  </li>
                  <li>
                    <Link href="/content-creation">Creación de contenido</Link>
                  </li>
                  <li>
                    <Link href="/index-seo">Index SEO</Link>
                  </li>
                  <li>
                    <Link href="/diseno-uxui">Diseño UX/UI</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-2xl font-bold">
            4Coders
          </Link>
        </div>
        <div className="navbar-end lg:flex">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/equipo">Nuestro equipo</Link>
              </li>
              <li>
                <details>
                  <summary>Características</summary>
                  <ul
                    className="p-2"
                    style={{ backgroundColor: "#22c55e", zIndex: 0 }}
                  >
                    <li>
                      <Link href="/precios">Precios</Link>
                    </li>
                    <li>
                      <Link href="/soporte">Soporte</Link>
                    </li>
                    <li>
                      <Link href="/marketing-digital">Marketing Digital</Link>
                    </li>
                    <li>
                      <Link href="/content-creation">
                        Creación de contenido
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-seo">Index SEO</Link>
                    </li>
                    <li>
                      <Link href="/diseno-uxui">Diseño UX/UI</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
