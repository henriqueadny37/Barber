/* eslint-disable @next/next/no-img-element */
import Barbearia from "../../Fotos/Barbearia.png";
import pomada from "../../Fotos/Catalogo/pomada.jpg";
import vanbeards from "../../Fotos/Catalogo/vanbeards.jpeg";
import pomadaaalfa from "../../Fotos/Catalogo/pomadaaalfa.jpg";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="relative bg-abwhite flex flex-col justify-center overflow-hidden py-6 sm:py-12 lg:h-screen">
        <div className="relative pt-10 px-6 pb-8 shadow-xl ring-1 ring-abyellow sm:mx-auto max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <img
              src={Barbearia.src}
              alt="logo-barbearia"
              className="w-[50px] h-[50px]"
            />
            <div className="divide-y divide-abbrown">
              <div className="space-y-6 py-8 font-semibold leading-7 text-abdark">
                <p>Bem vindo ao nosso catálogo</p>
                <ul className="space-y-4 lg:flex gap-3 lg:text-xs">
                  <li className="flex flex-col items-center border border-abplat p-2 rounded-lg lg:mt-4">
                    <img
                      src={pomada.src}
                      alt="pomada-cabelo"
                      className="w-32 h-32"
                    />
                    <p className="my-3">Pomada Modeladora Alfa Looks</p>
                  </li>
                  <li className="flex flex-col items-center border border-abplat p-2 rounded-lg">
                    <img
                      src={vanbeards.src}
                      alt="pomada-cabelo"
                      className="w-32 h-32"
                    />
                    <p className="my-3">pomada para cabelo</p>
                  </li>
                  <li className="flex flex-col items-center border border-abplat p-2 rounded-lg">
                    <img
                      src={pomadaaalfa.src}
                      alt="pomada-modeladora-cabelo"
                      className="w-32 h-32"
                    />
                    <p className="my-3">pomada para cabelo</p>
                  </li>
                  <li className="flex flex-col items-center border border-abplat p-2 rounded-lg">
                    <img
                      src={pomada.src}
                      alt="pomada-cabelo"
                      className="w-32 h-32"
                    />
                    <p className="my-3">pomada para cabelo</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-abdeep rounded-md w-48 justify-center items-center m-auto py-4">
          <Link href="/">Voltar</Link>
        </button>
      </div>
    </>
  );
}
