import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/landing/hero";
import { MindMap } from "@/components/landing/mind-map";


export default function Home() {
  return (
    <main>
    <div className="min-h-screen w-full sphere ">
      <div className="pt-24 mx-auto w-[80rem] md:px-20 max-w-[98%]">
        <Hero /> 
        <MindMap />
      </div>
    </div>
    </main>
  );
}
