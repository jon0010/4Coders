import React from "react";

const Navbar = () => {
  return (
    <div className="navbar font-semibold z-10 text-white relative w-full inset-x-0 top-0 flex justify-center items-center z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden absolute left-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          >
            <li>
              <a>Nosotros</a>
            </li>
            <li>
              <a>Proyectos</a>
            </li>
            <li>
              <a>Caracteristicas</a>
              <ul className="p-2">
                <li>
                  <a>Precios</a>
                </li>
                <li>
                  <a>Soporte</a>
                </li>
                <li>
                  <a>Marketing Digital</a>
                </li>
                <li>
                  <a>Creación de contenido</a>
                </li>
                <li>
                  <a>Index SEO</a>
                </li>
                <li>
                  <a>Diseño UX/UI</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">4Coders</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Nosotros</a>
          </li>
          <li>
            <a>Proyectos</a>
          </li>
          <li>
            <details>
              <summary>Características</summary>
              <ul
                className="p-2"
                style={{ backgroundColor: "#22c55e", zIndex: 0 }}
              >
                <li>
                  <a>Precios</a>
                </li>
                <li>
                  <a>Soporte</a>
                </li>
                <li>
                  <a>Marketing Digital</a>
                </li>
                <li>
                  <a>Creación de contenido</a>
                </li>
                <li>
                  <a>Index SEO</a>
                </li>
                <li>
                  <a>Diseño UX/UI</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
