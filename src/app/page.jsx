"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub, FaDesktop } from "react-icons/fa";


// Importar componentes
import Header from "../components/Header";
import Photo from "../components/Photo";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">

        <section className="h-full max-auto gap-0.5">

          <div className="flex flex-col xl:flex-row items-center justify-between pt-4 xl:pb-24">
  
                  <div className="p-6 gap-5 text-center xl:text-left max-w-[800px] flex flex-col space-y-6 order-2 xl:order-none mb-8 xl:mb-0">
                    <span className="font-medium hl:mt-9 xl:mb-9">Desenvolvedora de Sistemas 👩🏻‍💻</span>
                    <h1 className="h1 -4 text-[32px] md:text-[48px] xl:text-[80px] leading-[1.1] font-semibold">
                    Olá, eu sou a{" "}
                    <span className="text-blue-700">Giovanna Caron</span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-gray-900 text-sm md:text-base">
                    Sou uma <span className="font-medium text-blue-700">Desenvolvedora de Sistemas do SENAI Valinhos,</span> apaixonada por criar soluções
                    inovadoras. Neste site, você encontrará meu projeto realizado durante o 4o Semestre na <span className="font-medium text-blue-700">2TDS1.</span>
                    </p>

                    <p className="max-w-[500px] mb-9 text-gray-900 text-sm md:text-base"> <span className="font-medium text-blue-800">Matéria:</span> Front-End II</p>
                    <p className="max-w-[500px] mb-9 text-gray-900 text-sm md:text-base">"Liberdade é pouco. O que desejo ainda não tem nome."  <span className="font-medium text-blue-800">- Clarice Lispector</span> </p>
                    <div className="flex flex-wrap items-start justify-start xl:flex-row xl:items-center xl:text-center gap-8 mt-8 mb-8 xl:mb-0">
                    
                    <div>
                      <button className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors font-semibold text-sm md:text-base">
                      Clique aqui
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8 mb-8 xl:mb-0 xl:text-center">
                      <a
                      href="https://www.instagram.com/gihcaron?igsh=NTZia2xla2U5ZjNm"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <FaInstagram
                        size={20}
                        className="text-blue-600 hover:text-blue-800"
                      />
                      </a>
                      <a
                      href="https://www.linkedin.com/in/giovanna-caron/"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <FaLinkedin
                        size={20}
                        className="text-blue-600 hover:text-blue-800"
                      />
                      </a>
                      <a
                      href="https://github.com/gihcaron"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <FaGithub
                        size={20}
                        className="text-blue-600 hover:text-blue-800"
                      />
                      </a>
                    </div>

                    </div>

                  </div>

                  {/* Photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>

        </section>

      </div>

      <Footer />

    
    </main>
  );
}
