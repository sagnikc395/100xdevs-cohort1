import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  return (
    <main>
      <VideoCard />
    </main>
  );
}
