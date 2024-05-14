import Image from "next/image";
import { InfoBox, Hero } from '@/components';

export default function Home() {
  return (
    <main className="bg-pattern-bg">
      <Hero/>
      <InfoBox/>
    </main>
  );
}
