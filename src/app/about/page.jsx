"use client";
import Brain from "../components/brain";
import {motion, useInView, useScroll} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AboutPage = () => {

  const  containerRef = useRef();

  const {scrollYProgress} = useScroll({container:containerRef});

  const imgRef = useRef();
  const isImgSkillRefInView = useInView(imgRef, {margin:"-100px"});

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
   
  const images = [
    "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1}}
    >
      {/*CONTAINER*/}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/*text container*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/*BIOGRAPHY CONTAINER*/}
          <div className="flex flex-col gap-12 justify-center ">
             {/* BIOGRAPHY IMAGES with animation triggered on view */}
             <div className="pb-2 flex flex-row gap-12 justify-center items-center" ref={imgRef}>
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isImgSkillRefInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 2, delay: index * 0.5 }}
                  >
                    <Image
                      src={src}
                      alt=""
                      width={112}
                      height={112}
                      className="w-28 h-28 rounded-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            

            {/*biotitle*/}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/*biodesc*/}
            <p className="text-lg">put the explanation here!</p>
            {/*bioquote*/}
            <span className="italic">explanation</span>
            {/*bio sign SVG*/}
            <div className="self-end">
              <svg width="329" height="179" viewBox="0 0 329 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 118C15.7119 111.086 23.9543 106.439 30.1667 99.9444C34.4895 95.4251 37.1378 89.4907 40.6111 84.3333C47.3533 74.3222 52.3621 63.8196 57.5556 53C61.3424 45.1108 62.1632 36.8349 65.1111 28.8333C66.3969 25.3433 68.0151 21.8829 68.7778 18.2222C70.0396 12.1653 69.0237 20.745 69 22.6667C68.7545 42.552 63.162 61.7602 62.1667 81.5C61.7355 90.0519 62 98.661 62 107.222C62 108.691 61.8812 112.989 62.3889 111.611C64.4071 106.133 66.2318 100.482 67.8889 94.8889C69.5982 89.1201 71 76.5234 71 90.1667C71 92.6836 71.1482 99.6423 72.5556 97.5556C75.2806 93.515 76.7405 88.3893 78.6667 83.9444C81.6575 77.0425 81.6339 88.5883 81.7778 90.6667C82.2352 97.2732 82.3219 98.4637 87.5556 92.7778C89.0304 91.1755 92.5346 84.1899 93.4444 89.3889C93.605 90.3063 94.0838 99.0401 94.6667 98.7222C99.0648 96.3232 100.096 84.8977 103.222 92.1111C104.479 95.0114 110.335 86.308 112.944 90.2222C113.529 91.0986 113.725 94.7538 114.444 93.5556C115.304 92.1226 117.071 88.6645 119.222 89.2222C120.577 89.5734 121.223 90.4727 122.056 91.4444C126.269 96.3597 126.124 78.9704 126.333 72.5C126.956 53.2853 126.933 33.5373 122.222 14.7778C121.849 13.2902 118.663 -4.34886 118 4.22222C116.785 19.9262 119.542 35.3948 122 50.8333C125.148 70.6074 128.543 90.5506 130.833 110.444C132.332 123.467 133 136.875 133 150" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M113 53C121.811 47.927 132.624 43 143 43" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M114 59H138" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M89 71C96.5922 68.8183 104.167 66.3611 111.833 64.4444C115.198 63.6033 115.965 63.8849 114.889 67.4444C111.042 80.169 103.509 97.4625 93.3333 106.333C90.2096 109.057 95.8758 98.2521 98.4444 95C107.047 84.1081 118.747 72.89 132.889 70.1111C138.564 68.9961 147.313 68.728 151.611 73.5556C159.095 81.9601 154.902 99.5997 152.167 108.778C144.278 135.244 121.886 148.38 99.5556 161.944C91.8364 166.633 81.9717 173.862 72.8889 176.333C63.3789 178.921 70.8215 159.165 71.1111 158.333C87.7873 110.459 122.62 73.7838 156.556 37.5556C162.119 31.6166 168.851 21.3282 177 19" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M177 17C177.351 13.4896 178.628 10.763 180.889 8C182.716 5.76707 189.97 1.05048 187.333 2.22222C182.332 4.44497 176.724 5.79521 171.444 7.22222C166.914 8.4466 179.355 13 182 13" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M2 85C52.8409 77.9194 103.866 72.3223 154.889 66.7222C202.422 61.5052 235.804 57.9441 281.444 53.5556C289.255 52.8046 297.16 52.797 304.889 51.4444C306.563 51.1516 306 49.3483 306 48" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M317 39H327" stroke="black" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>

            {/*bio scroll SVG*/}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
                <path d="M10 118C15.7119 111.086 23.9543 106.439 30.1667 99.9444C34.4895 95.4251 37.1378 89.4907 40.6111 84.3333C47.3533 74.3222 52.3621 63.8196 57.5556 53C61.3424 45.1108 62.1632 36.8349 65.1111 28.8333C66.3969 25.3433 68.0151 21.8829 68.7778 18.2222C70.0396 12.1653 69.0237 20.745 69 22.6667C68.7545 42.552 63.162 61.7602 62.1667 81.5C61.7355 90.0519 62 98.661 62 107.222C62 108.691 61.8812 112.989 62.3889 111.611C64.4071 106.133 66.2318 100.482 67.8889 94.8889C69.5982 89.1201 71 76.5234 71 90.1667C71 92.6836 71.1482 99.6423 72.5556 97.5556C75.2806 93.515 76.7405 88.3893 78.6667 83.9444C81.6575 77.0425 81.6339 88.5883 81.7778 90.6667C82.2352 97.2732 82.3219 98.4637 87.5556 92.7778C89.0304 91.1755 92.5346 84.1899 93.4444 89.3889C93.605 90.3063 94.0838 99.0401 94.6667 98.7222C99.0648 96.3232 100.096 84.8977 103.222 92.1111C104.479 95.0114 110.335 86.308 112.944 90.2222C113.529 91.0986 113.725 94.7538 114.444 93.5556C115.304 92.1226 117.071 88.6645 119.222 89.2222C120.577 89.5734 121.223 90.4727 122.056 91.4444C126.269 96.3597 126.124 78.9704 126.333 72.5C126.956 53.2853 126.933 33.5373 122.222 14.7778C121.849 13.2902 118.663 -4.34886 118 4.22222C116.785 19.9262 119.542 35.3948 122 50.8333C125.148 70.6074 128.543 90.5506 130.833 110.444C132.332 123.467 133 136.875 133 150" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M113 53C121.811 47.927 132.624 43 143 43" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M114 59H138" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M89 71C96.5922 68.8183 104.167 66.3611 111.833 64.4444C115.198 63.6033 115.965 63.8849 114.889 67.4444C111.042 80.169 103.509 97.4625 93.3333 106.333C90.2096 109.057 95.8758 98.2521 98.4444 95C107.047 84.1081 118.747 72.89 132.889 70.1111C138.564 68.9961 147.313 68.728 151.611 73.5556C159.095 81.9601 154.902 99.5997 152.167 108.778C144.278 135.244 121.886 148.38 99.5556 161.944C91.8364 166.633 81.9717 173.862 72.8889 176.333C63.3789 178.921 70.8215 159.165 71.1111 158.333C87.7873 110.459 122.62 73.7838 156.556 37.5556C162.119 31.6166 168.851 21.3282 177 19" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M177 17C177.351 13.4896 178.628 10.763 180.889 8C182.716 5.76707 189.97 1.05048 187.333 2.22222C182.332 4.44497 176.724 5.79521 171.444 7.22222C166.914 8.4466 179.355 13 182 13" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M2 85C52.8409 77.9194 103.866 72.3223 154.889 66.7222C202.422 61.5052 235.804 57.9441 281.444 53.5556C289.255 52.8046 297.16 52.797 304.889 51.4444C306.563 51.1516 306 49.3483 306 48" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M317 39H327" stroke="black" stroke-width="3" stroke-linecap="round"/>
            </motion.svg>
          </div>
          {/*SKILLS CONTAINER*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            
            {/*skilltitle*/}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/*skills list*/}
            <motion.div  initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
             
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React</div>
              
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML</div>
             
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PHP</div>
              
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">GitHub</div>
            </motion.div>
            {/*skill scroll svg*/}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
                <path d="M10 118C15.7119 111.086 23.9543 106.439 30.1667 99.9444C34.4895 95.4251 37.1378 89.4907 40.6111 84.3333C47.3533 74.3222 52.3621 63.8196 57.5556 53C61.3424 45.1108 62.1632 36.8349 65.1111 28.8333C66.3969 25.3433 68.0151 21.8829 68.7778 18.2222C70.0396 12.1653 69.0237 20.745 69 22.6667C68.7545 42.552 63.162 61.7602 62.1667 81.5C61.7355 90.0519 62 98.661 62 107.222C62 108.691 61.8812 112.989 62.3889 111.611C64.4071 106.133 66.2318 100.482 67.8889 94.8889C69.5982 89.1201 71 76.5234 71 90.1667C71 92.6836 71.1482 99.6423 72.5556 97.5556C75.2806 93.515 76.7405 88.3893 78.6667 83.9444C81.6575 77.0425 81.6339 88.5883 81.7778 90.6667C82.2352 97.2732 82.3219 98.4637 87.5556 92.7778C89.0304 91.1755 92.5346 84.1899 93.4444 89.3889C93.605 90.3063 94.0838 99.0401 94.6667 98.7222C99.0648 96.3232 100.096 84.8977 103.222 92.1111C104.479 95.0114 110.335 86.308 112.944 90.2222C113.529 91.0986 113.725 94.7538 114.444 93.5556C115.304 92.1226 117.071 88.6645 119.222 89.2222C120.577 89.5734 121.223 90.4727 122.056 91.4444C126.269 96.3597 126.124 78.9704 126.333 72.5C126.956 53.2853 126.933 33.5373 122.222 14.7778C121.849 13.2902 118.663 -4.34886 118 4.22222C116.785 19.9262 119.542 35.3948 122 50.8333C125.148 70.6074 128.543 90.5506 130.833 110.444C132.332 123.467 133 136.875 133 150" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M113 53C121.811 47.927 132.624 43 143 43" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M114 59H138" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M89 71C96.5922 68.8183 104.167 66.3611 111.833 64.4444C115.198 63.6033 115.965 63.8849 114.889 67.4444C111.042 80.169 103.509 97.4625 93.3333 106.333C90.2096 109.057 95.8758 98.2521 98.4444 95C107.047 84.1081 118.747 72.89 132.889 70.1111C138.564 68.9961 147.313 68.728 151.611 73.5556C159.095 81.9601 154.902 99.5997 152.167 108.778C144.278 135.244 121.886 148.38 99.5556 161.944C91.8364 166.633 81.9717 173.862 72.8889 176.333C63.3789 178.921 70.8215 159.165 71.1111 158.333C87.7873 110.459 122.62 73.7838 156.556 37.5556C162.119 31.6166 168.851 21.3282 177 19" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M177 17C177.351 13.4896 178.628 10.763 180.889 8C182.716 5.76707 189.97 1.05048 187.333 2.22222C182.332 4.44497 176.724 5.79521 171.444 7.22222C166.914 8.4466 179.355 13 182 13" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M2 85C52.8409 77.9194 103.866 72.3223 154.889 66.7222C202.422 61.5052 235.804 57.9441 281.444 53.5556C289.255 52.8046 297.16 52.797 304.889 51.4444C306.563 51.1516 306 49.3483 306 48" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M317 39H327" stroke="black" stroke-width="3" stroke-linecap="round"/>
            </motion.svg>
            
          </div>

          {/*EXP CONTAINER*/}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            
            {/*experience title*/}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            
            {/*experience list*/}
            <motion.div initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="">
              {/*experience list item 1*/}
              <div className="flex justify-between h-48">

                {/*LEFT*/}
                <div className="w-1/3 ">
                  {/*job title*/}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                  {/*job desc*/}
                  <div className="p-3 text-sm italic">my current employment....</div>
                  {/*job date*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                  {/*job company*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                </div>

                {/*CENTER*/}
                <div className="w-1/6">
                  {/*line*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/*line circle*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                  {/*line*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/*line circle*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                  {/*line*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/*line circle*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className=""></div>
              </div>
            
              {/*experience list item 2*/}
              <div className="flex justify-between h-48">
                
                {/*LEFT*/}
                <div className="">
                 
                </div>

                {/*CENTER*/}
                <div className="">
                  {/*line*/}
                  <div className="">
                    {/*line circle*/}
                    <div className=""></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3 ">
                  {/*job title*/}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                  {/*job desc*/}
                  <div className="p-3 text-sm italic">my current employment....</div>
                  {/*job date*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                  {/*job company*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                </div>
              </div>

              {/*experience list item 3*/}
              <div className="flex justify-between h-48">
                
                {/*LEFT*/}
                <div className="w-1/3 ">
                  {/*job title*/}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                  {/*job desc*/}
                  <div className="p-3 text-sm italic">my current employment....</div>
                  {/*job date*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                  {/*job company*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                </div>

                {/*CENTER*/}
                <div className="">
                  {/*line*/}
                  <div className="">
                    {/*line circle*/}
                    <div className=""></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="">
                  
                </div>
              </div>


            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER*/}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 first-letter:xl:1/2">
          <Brain scrollYProgress={scrollYProgress}/>
        
        </div>
      </div>

    </motion.div>
  );
};

export default AboutPage