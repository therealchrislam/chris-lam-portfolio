const FILE_EXTENSIONS = [".mp4", ".webm", ".mov", ".m4v"];

function isVideoFile(url: string): boolean {
  const path = url.split("?")[0].toLowerCase();
  return FILE_EXTENSIONS.some((ext) => path.endsWith(ext));
}

export default function VideoEmbed({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  if (isVideoFile(url)) {
    return (
      <video
        src={url}
        controls
        playsInline
        className="aspect-video w-full bg-black"
      />
    );
  }

  return (
    <div className="relative aspect-video w-full bg-black">
      <iframe
        src={url}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
