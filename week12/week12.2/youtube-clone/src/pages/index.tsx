import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  return (
    <div>
      <VideoCard
        image={"/yt-thumbnail.jpeg"}
        thumbnail={"/profile-image.jpeg"}
        title={"Isekai is Dead "}
        author={"Gigguk"}
        views={`100k views`}
        timestamp={`3 days ago`}
      />
    </div>
  );
}
