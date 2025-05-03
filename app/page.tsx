import Hero from "@/components/Hero";
import { Toaster } from "react-hot-toast";


export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
      <div><Toaster/></div>
      <Hero/>
      
    </div>
  );
}
