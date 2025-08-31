"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// Importar componentes
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <section className="p-6 h-full max-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between pt-4 xl:pb-24">
            {/* Texto */}
            <div className=" p-6 gap-5 text-center xl:text-left max-w-[800px] ">
              <span className="">Desenvolvedora de Sistemas</span>
              <h1 className="h1 text-[48px] xl:text-[80px] leading-[1.1] font-semibold">
                Olá, eu sou a{" "}
                <span className="text-blue-700">Giovanna Caron</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-gray-900">
                Sou uma desenvolvedora de sistemas apaixonada por criar soluções
                inovadoras e eficientes.
              </p>
              <div>
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors font-semibold">
                  Clique aqui
                </button>
              </div>

              <div className="flex flex-wrap gap-4 mt-8 mb-8 xl:mb-0 xl:text-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={32}
                    className="text-blue-600 hover:text-blue-800"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={32}
                    className="text-blue-600 hover:text-blue-800"
                  />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={32}
                    className="text-blue-600 hover:text-blue-800"
                  />
                </a>
              </div>
            </div>
            {/* Photo */}
            <div>Photo</div>
          </div>
        </section>
      </div>
    </main>
  );
}

// export default function Home() {

//   return(
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 border-blue" >
//       <div className="flex grid-cols-2 items-center rounded-lg shadow-lg h-150 border-2 border-blue-500 max-w-screen-lg px-12 my-4">

//       <div className="p-6 mx-4">
//         <Image
//         src="/images/giovanna.jpeg"
//         alt="Giovanna Caron foto de perfil"
//         layout="intrinsic"
//         width={400}
//         height={600}
//         className="w-4xl h-150 rounded-2xl" />

//       </div>
//       <div className=" text-justify-center ">
//       <h1 className="">Giovanna Caron de Barros</h1>
//                    <h3  className=""> 2TDS1 - Atividade Avaliativa Front End</h3>
//                    <p className="">Amados Docentes: Thiago Ferreira e Marcelo Carboni</p>
//                    <h3  className=""> Conheça a API Estudantes e Projetos:</h3>
//                    <p className="">Esta API possui 2 entidades: Estudantes e Projetos, onde cada Estudante possui seu projeto relacionado, com o proósito de gerenciar os alunoes de forma eficaz permitindo a visualização de suas atividades e informações pessoais.  </p>
//                    <p className="">A API permite a consulta e manipulação de dados de forma eficiente.</p>
//       </div>
//       </div>
//     </div>
//   );
// }
