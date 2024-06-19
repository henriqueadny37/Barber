export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-t from-abbrown to bg-abdark m-auto rounded-lg">
        <h1 className="text-center text-2xl font-semibold">
          Horário de funcionamento
        </h1>
        <div className="grid md:flex max-w-7xl p-2 text-center max-h-full my-3">
          <div className="flex w-full lg:w-60 m-auto bg-abdark rounded-lg p-2 justify-between items-center">
            <div>Seg a Sáb</div>
            <div>09:00 ás 19:00</div>
          </div>
          <div className="flex w-full my-4 lg:my-0 lg:w-60 m-auto bg-abdark rounded-lg p-2 justify-between items-center">
            <div>Sábados</div>
            <div>09:00 ás 19:30</div>
          </div>
          <div className="w-56 m-auto">
            <button className="bg-abdark text-abwhite hover:bg-abwhite hover:text-abdark rounded-lg p-2">
              <a href="https://www.google.com.br/maps/place/Barbearia+Avelino/@-5.8492152,-35.245413,18.5z/data=!4m15!1m8!3m7!1s0x7b255bba51ddd99:0xb166da229cfd256a!2sR.+Rian%C3%B3polis+-+Pitimb%C3%BA,+Natal+-+RN,+59136-260!3b1!8m2!3d-5.8495799!4d-35.2441244!16s%2Fg%2F1ymwvzsbq!3m5!1s0x7b255b006002f11:0x5e9baefbd8ebad65!8m2!3d-5.849029!4d-35.245234!16s%2Fg%2F11c48r_7jt?entry=ttu">
                Saiba como chegar
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
