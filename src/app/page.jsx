"use client";
import Image from "next/image";
import {motion} from "framer-motion";



const Homepage = () => {
  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1}}
    >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/*image container*/}
          <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image src = "/hero.png" alt="" fill className="object-contain"/>
          </div>
          {/*text container*/}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/*title*/}
            <motion.h1 className="text-4xl md:text-6xl font bold" 
              style={{overflow:"hidden", whiteSpace:"nowrap"}}
              initial={{width:0}}
              animate={{width:"100%"}}
              transition={{duration:2, ease:"easeInOut"}} //animation text
              >
              Crafting Digital.....
            </motion.h1>
            {/*description*/}
            <p className="md:text-xl">
              Welcome to my digital canvas, where innovation and creativity converge
            </p>
            {/*button*/}
            <div className="w-full flex gap-4">
              <motion.button className="p-4 rounded-lg ring-1 ring-black bg-black text-white" whileTap={{ scale: 0.85 }}>View My Works</motion.button>
              <motion.button className="p-4 rounded-lg ring-1 ring-black" whileTap={{ scale: 0.85 }}>Contact Me</motion.button>
            </div>
          </div>
        </div>
  </motion.div>
  );
};

export default Homepage;
