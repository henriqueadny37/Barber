/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import Xmark from "./Icons/Xmark.svg";
import Bars from "./Icons/Bars.svg";

export default function Linhas() {
  const [logclick, setLogclick] = useState(false);

  const zip = () => {
    setLogclick(!logclick);
  };

  return (
    <>
      <nav className="bg-abbrown w-80 rounded-md justify-center items-center m-auto">
        <div className="w-80 m-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-10">
            <div className="flex items-center">
              <div className="flex-shrink-0 font-semibold">
                <p>Veja os Serviços Disponiveis</p>
              </div>
            </div>
            <div className="grid">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-abwhite
              hover:text-abplat focus:outline-none focus:ring-2 focus:ring-inset focus:ring-abwhite"
                onClick={zip}>
                {logclick ? (
                  <img src={Xmark.src} alt="close" className="w-5 h-5" />
                ) : (
                  <img src={Bars.src} alt="menu" className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          {logclick && (
            <div className="grid">
              <div className="px-2 pb-3 space-x-1 text-center font-semibold sm:px-3">
                <a
                  href="#"
                  className="block p-1 bg-abwhite text-abbrown hover:bg-abbrown hover:text-abwhite rounded-md">
                  Corte + lavagem
                </a>
                <a
                  href="#"
                  className="block p-1 my-1 bg-abwhite text-abbrown hover:bg-abbrown hover:text-abwhite rounded-md">
                  Tinturas de cabelo
                </a>
                <a
                  href="#"
                  className="block p-1 my-1 bg-abwhite text-abbrown hover:bg-abbrown hover:text-abwhite rounded-md">
                  Hidratação capilar
                </a>
                <a
                  href="#"
                  className="block p-1 my-1 bg-abwhite text-abbrown hover:bg-abbrown hover:text-abwhite rounded-md">
                  Sobrancelha
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
