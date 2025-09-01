import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'  

const Photo = () => {
  return (
       <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.2, ease: "easeIn" },
        }}
        className="relative w-[300px] h-[300px] xl:w-[510px] xl:h-[510px] flex items-center justify-center"
      >
        {/* Imagem dentro do círculo */}
        <Image
          src="/images/GiovannaC.jpeg"
          alt="Giovanna Caron foto de perfil"
          priority
          fill
          className="object-cover rounded-full shadow-lg"
        />

            {/* Circulo */}

            <motion.svg className="absolute inset-0 w-full h-full"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg">
                <motion.circle cx="253" cy="253" r="250" stroke="#00ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 25 24", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360,]
                }} 
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}/>
            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo