/* eslint-disable @next/next/no-img-element */
import pomada from "./Fotos/Catalogo/pomada.jpg";
import banner from "./Fotos/Catalogo/banner.png";
import Link from "next/link";

export default function Catalogo() {
  return (
    <div className="bg-abwhite rounded-xl">
      <div className="max-w-7xl rounded-md text-abbrown">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col lg:text-end">
          <h1 className="mt-10 text-3xl font-semibold text-abbrown">
            Conheça o catálogo de produtos.
          </h1>
          <p className="text-xs lg:text-base">
            compre diretamente pelo whatsaspp
          </p>
          <div className="lg:justify-end lg:items-end">
            <button
              className="mt-1 text-lg lg:text-xl font-semibold text-abwhite bg-abdeep hover:bg-abdark hover:text-abwhite w-44 h-10 lg:w-60 lg:h-16
           rounded-xl">
              <a href="/Section/Catalogo/PagCatalogo">Acesse o Catálogo</a>
            </button>
          </div>
        </div>
        <img src={pomada.src} alt="" className="md:h-80 lg:hidden" />
        <img src={banner.src} alt="" className="hidden lg:flex" />
      </div>
    </div>
  );
}
