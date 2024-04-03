export function VideoCard() {
  return (
    <div>
      <img src="/yt-thumbnail.jpeg" className="rounded-xl" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img
            className="rounded-full w-20 h-20 bg-slate-600"
            src="/profile-image.jpeg"
          />
        </div>
        <div className="col-span-11 pl-5">
          <div className="">No More Isekai 😌</div>
          <div className="col-span-11  text-gray-600 text-base">Gigguk</div>
          <div className="col-span-11  text-gray-600 text-base">
            2 Mn | 13 days ago
          </div>
        </div>
      </div>
    </div>
  );
}
