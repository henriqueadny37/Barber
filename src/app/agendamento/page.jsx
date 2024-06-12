"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function formulario() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_gs99hxu",
        "template_5gzrjyn",
        templateParams,
        "80oAwJkB_-yayLblD"
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response, text);
          setEmail("");
          setName("");
          setMessage("");
        },
        (err) => {
          console.log("error", err);
        }
      );
  }

  return (
    <>
      <div className=" p-3 md:p-3 md:justify-center md:items-center md:space-x-32 lg:space-x-96">
        <h1 className="my-4 text-2xl font-semibold justify-center items-center text-center">
          Marque o seu horário
        </h1>
        <form
          action=""
          onSubmit={sendEmail}
          className="max-w-[600px] w-full flex-col justify-center items-center text-center">
          <div className="grid">
            <input
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="my-4 h-9 rounded-md border-0 p-4 grid text-abbrown"
            />

            <input
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="my-4 h-9 rounded-md border-0 p-4 grid text-abbrown"
            />
            <textarea
              name="textarea"
              id=""
              placeholder="Digite sua mensagem aqui"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="my-4 rounded-md border-0 p-4 h-24 resize-none text-abbrown"
            />

            <div>
              <button>
                <a href="/next">enviar</a>
              </button>
            </div>
          </div>
        </form>
        <div>
          <button
            className="my-4 bg-abwhite text-abbrown h-9 w-24 rounded-md cursor-pointer font-semibold text-md
           hover:bg-abyellow hover:text-abbrown transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 duration-300">
            <Link href="/">Voltar</Link>
          </button>
        </div>
      </div>
    </>
  );
}

{
  /*justify-center items-center text-abbrown p-4 min-h-screen*/
}
{
  /*import Link from "next/link";

export const agenda = () => {
  return (
    <>
      <form
        action="https://formsubmit.co/henriqueguinho171@gmail.com"
        method="POST"
        className="flex flex-col p-2 m-3 justify-center items-center text-center border border-abwhite text-abbrown">
        <input type="text" id="" placeholder="Nome" className="w-2/12" />
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/agendamento/next"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="e-mail"
          className="w-2/12"
        />
        <input
          type="text"
          id=""
          placeholder="Tipo de corte"
          className="w-2/12"
        />
        <textarea
          name="message"
          id=""
          placeholder="escreva o dia e o horário que deseja"
          className="w-2/12"></textarea>
        <button>Enviar</button>
      </form>
      <div>
        <button>
          <Link href="/">Voltar</Link>
        </button>
      </div>
    </>
  );
};
export default agenda; */
}
