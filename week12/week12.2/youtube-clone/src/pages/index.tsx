import { AppBar } from "@/components/AppBar";
import { VideoGrid } from "@/components/VideoGrid";

export default function Home() {
  return (
    <div className="h-screen">
      <AppBar />
      <VideoGrid />
    </div>
  );
}
