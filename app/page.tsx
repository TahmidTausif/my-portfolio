import Hero from "@/components/Hero";
import { Toaster } from "react-hot-toast";


export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8   font-[family-name:var(--font-geist-sans)]">
      <div><Toaster/></div>
      <Hero/>
      
    </div>
  );
}
