import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  return (
    <main>
      <VideoCard
        image={"/yt-thumbnail.jpeg"}
        thumbnail={"/profile-image.jpeg"}
        title={"Isekai is Dead "}
        author={"Gigguk"}
        views={`${Math.floor(Math.random() * 1_000_000)} k views`}
        timestamp={`${new Date().getDate()} days ago`}
      />
    </main>
  );
}
