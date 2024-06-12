/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Xmark from "./Icons/Xmark.svg";
import Bars from "./Icons/Bars.svg";

export const Menu = () => {
  const [click, setClick] = useState(false);

  const bots = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="bg-abbrown">
        <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 font-semibold text-2xl">
                <a href="#">Avelino</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 items-center space-x-4">
                <a
                  href="#"
                  className="text-abwhite hover:bg-abwhite hover:text-abbrown p-2 rounded-lg">
                  Inicio
                </a>
                <a
                  href="/agendamento"
                  className=" text-abwhite hover:bg-abwhite hover:text-abbrown p-2 rounded-lg">
                  Contato
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=558498097128"
                  className="text-abwhite hover:bg-abwhite hover:text-abbrown p-2 rounded-lg">
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/avelino_barbearia/"
                  target="_blank"
                  className="text-abwhite hover:bg-abwhite hover:text-abbrown p-2 rounded-lg">
                  Instagram
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white
              hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={bots}>
                {click ? (
                  <img src={Xmark.src} alt="close" className="w-10 h-10" />
                ) : (
                  <img src={Bars.src} alt="menu" className="w-10 h-10" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          {click && (
            <div className="md:hidden">
              <div className="px-2 pb-3 pt-2 space-x-1 sm:px-3">
                <a
                  href="#"
                  className="text-abwhite hover:bg-abwhite hover:text-abbrown p-3 rounded-lg block">
                  Inicio
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=558498097128"
                  className="text-abwhite hover:bg-abwhite hover:text-abbrown p-2 rounded-lg block">
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/avelino_barbearia/"
                  target="_blank"
                  className="text-abwhite hover:bg-abwhite hover:text-abbrown p-2 rounded-lg block">
                  Instagram
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
export default Menu;
