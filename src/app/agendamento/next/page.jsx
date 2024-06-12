import Link from "next/link";

export default function volver() {
  return (
    <>
      <div className="flex-col justify-center items-center text-center">
        <p>Email enviado com sucesso!</p>
        <button className="bg-abbrown text-abwhite p-2 m-2 rounded-md">
          <Link href="http://localhost:3000/agendamento">Voltar</Link>
        </button>
      </div>
    </>
  );
}
