/* eslint-disable @next/next/no-img-element */
import Catalogo from "./Catalogo";
import Barbearia from "./Fotos/Barbearia.png";
import reginaldofoto1 from "./Fotos/Fotoapresentação/reginaldofoto1.jpeg";
import Linhas from "./Linhas";
import Servicosbarba from "./Servicosbarba";

export const Section = () => {
  return (
    <>
      <div>
        <img src={Barbearia.src} alt="logo" />
      </div>
      <div className="max-w-7xl m-auto">
        <div className="items-center justify-center text-center font-semibold text-abwhite">
          <p className="flex-col lg:text-2xl">
            Confira os serviços que a barbearia Avelino oferece
          </p>
          <button className="h-14 w-44 flex-shrink-0 rounded-full bg-abbrown hover:bg-abwhite hover:text-abbrown p-2 my-4">
            <a href="/agendamento">Agendar horário</a>
          </button>
        </div>
        <div className="grid sm:my-10 md:flex md:my-0 justify-around items-center">
          <Linhas />
          <div className="my-8 sm:my-8 md:my-0"></div>
          <Servicosbarba />
        </div>
        <div className="my-8 p-3">
          <Catalogo />
        </div>

        <figure className="md:flex bg-abbrown rounded-xl p-8 md:p-0 m-4">
          <img
            src={reginaldofoto1.src}
            alt=""
            width="384"
            height="512"
            className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Olá Sou Régio Kadoshi, tenho um estabelecimento especializado
                em cortes de cabelo e barba para homens. Oferece serviços como
                cortes tradicionais, fades, barbas aparadas e tratamentos de
                barbear. a barbearia Avelino também proporciona um ambiente
                relaxante, Os clientes podem marcar horários ou simplesmente
                entrar para um serviço rápido. É um lugar onde os homens podem
                cuidar da aparência e desfrutar de uma experiência única de
                cuidados pessoais.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-abdeep">Régio Kadoshi</div>
              <div className="text-abplat">Barbeiro e Pedagogo</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
};
export default Section;
