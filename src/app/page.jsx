"use client";
import React from "react";
import Image from "next/image";

export default function Home() {
  
  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100 border-blue" > 
      <div className="flex grid-cols-2 items-center rounded-lg shadow-lg h-150 border-2 border-blue-500 max-w-screen-lg px-12 my-4">
     
      <div className="p-6 mx-4"> 
        <Image
        src="/images/giovanna.jpeg"
        alt="Giovanna Caron foto de perfil"
        layout="intrinsic"
        width={400}
        height={600}
        className="w-4xl h-150 rounded-2xl" />

      </div>
      <div className=" text-justify-center ">
      <h1 className="">Giovanna Caron de Barros</h1>
                   <h3  className=""> 2TDS1 - Atividade Avaliativa Front End</h3>
                   <p className="">Amados Docentes: Thiago Ferreira e Marcelo Carboni</p>
                   <h3  className=""> Conheça a API Estudantes e Projetos:</h3>
                   <p className="">Esta API possui 2 entidades: Estudantes e Projetos, onde cada Estudante possui seu projeto relacionado, com o proósito de gerenciar os alunoes de forma eficaz permitindo a visualização de suas atividades e informações pessoais.  </p>
                   <p className="">A API permite a consulta e manipulação de dados de forma eficiente.</p>
      </div>
      </div>
    </div>
  );
}
