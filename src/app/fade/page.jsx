"use client";
import ScrollAnimation from '../components/ScrollAnimation';
import { useScroll } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll(); 

  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      </div>

      {/* Scroll Animation Component */}
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <ScrollAnimation scrollYProgress={scrollYProgress}/>
      </div>

      {/* Add more sections if you want */}
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <p>Keep scrolling for more...</p>
      </div>
    </div>
  );
}
