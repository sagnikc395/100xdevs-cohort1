import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    image: "/yt-thumbnail.jpeg",
    thumbnail: "/profile-image.jpeg",
    title: "Isekai is Dead ",
    author: "Gigguk",
    views: `100k views`,
    timestamp: `3 days ago`,
  },
  {
    image: "/yt-thumbnail.jpeg",
    thumbnail: "/profile-image.jpeg",
    title: "Isekai is Not Dead!!! ",
    author: "Gigguk-2",
    views: `200k views`,
    timestamp: `1 day ago`,
  },
  {
    image: "/yt-thumbnail.jpeg",
    thumbnail: "/profile-image.jpeg",
    title: "Isekai is Dead ",
    author: "Gigguk",
    views: `100k views`,
    timestamp: `3 days ago`,
  },
  {
    image: "/yt-thumbnail.jpeg",
    thumbnail: "/profile-image.jpeg",
    title: "Isekai is Not Dead!!! ",
    author: "Gigguk-2",
    views: `200k views`,
    timestamp: `1 day ago`,
  },
];

export function VideoGrid() {
  return (
    <div className="grid gird-4">
      {VIDEOS.map((video) => (
        <VideoCard
          image={video.image}
          thumbnail={video.thumbnail}
          title={video.title}
          author={video.author}
          views={video.views}
          timestamp={video.timestamp}
        />
      ))}
    </div>
  );
}
