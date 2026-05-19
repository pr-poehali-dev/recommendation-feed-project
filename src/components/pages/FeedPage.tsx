import { useState } from "react";
import Icon from "@/components/ui/icon";

const videos = [
  {
    id: 1,
    user: "@дарья_танцует",
    avatar: "Д",
    avatarColor: "from-pink-500 to-purple-600",
    title: "Новый танец в ночном городе 🌃",
    tags: ["#танцы", "#ночь", "#нeon", "#вирусное"],
    likes: "124K",
    comments: "3.2K",
    shares: "18K",
    thumbnail: "https://cdn.poehali.dev/projects/d1be3cbc-c130-4886-9352-7cbb0dd74b50/files/ed0b9901-47e5-4c62-ad38-3fcce93eb17a.jpg",
    duration: "0:42",
  },
  {
    id: 2,
    user: "@котик_флуффи",
    avatar: "К",
    avatarColor: "from-orange-400 to-pink-500",
    title: "Мой кот снова что-то натворил 😹",
    tags: ["#коты", "#смешное", "#животные"],
    likes: "89K",
    comments: "5.8K",
    shares: "41K",
    thumbnail: "https://cdn.poehali.dev/projects/d1be3cbc-c130-4886-9352-7cbb0dd74b50/files/1bdf9835-1294-4c73-b62f-7f0a8b315982.jpg",
    duration: "0:28",
  },
  {
    id: 3,
    user: "@chef_максим",
    avatar: "М",
    avatarColor: "from-red-500 to-orange-500",
    title: "Стейк с огнём — рецепт за 60 секунд 🔥",
    tags: ["#еда", "#рецепты", "#гурман", "#готовим"],
    likes: "67K",
    comments: "2.1K",
    shares: "9K",
    thumbnail: "https://cdn.poehali.dev/projects/d1be3cbc-c130-4886-9352-7cbb0dd74b50/files/b330da16-9e6a-4716-bb08-37ceb6494c7b.jpg",
    duration: "1:01",
  },
  {
    id: 4,
    user: "@extreme_ivan",
    avatar: "И",
    avatarColor: "from-cyan-400 to-blue-600",
    title: "Паркур на крышах — только хардкор ⚡",
    tags: ["#паркур", "#экстрим", "#город", "#спорт"],
    likes: "201K",
    comments: "8.7K",
    shares: "55K",
    thumbnail: "https://cdn.poehali.dev/projects/d1be3cbc-c130-4886-9352-7cbb0dd74b50/files/59942080-1af7-400a-8f9e-c785d5590958.jpg",
    duration: "2:15",
  },
];

const VideoCard = ({ video, index }: { video: typeof videos[0]; index: number }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div
      className="animate-fade-in"
      style={{ animationDelay: `${index * 0.08}s`, opacity: 0 }}
    >
      <div className="relative rounded-2xl overflow-hidden bg-card video-card-hover cursor-pointer">
        {/* Thumbnail */}
        <div className="relative aspect-[9/14]">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Duration badge */}
          <div className="absolute top-3 right-3 glass px-2 py-0.5 rounded-full text-xs font-semibold text-white">
            {video.duration}
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all hover:bg-white/20 hover:scale-110">
              <Icon name="Play" size={22} className="text-white ml-1" />
            </div>
          </div>

          {/* Right action buttons */}
          <div className="absolute right-3 bottom-20 flex flex-col gap-4">
            <button
              onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
              className="flex flex-col items-center gap-1"
            >
              <div className={`w-10 h-10 rounded-full glass flex items-center justify-center transition-all active:scale-90 ${liked ? "bg-[hsl(var(--neon-pink))/20]" : ""}`}>
                <Icon name="Heart" size={20} className={liked ? "text-[hsl(var(--neon-pink))]" : "text-white"} />
              </div>
              <span className="text-white text-xs font-semibold drop-shadow">{video.likes}</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <span className="text-white text-xs font-semibold drop-shadow">{video.comments}</span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
              className="flex flex-col items-center gap-1"
            >
              <div className={`w-10 h-10 rounded-full glass flex items-center justify-center transition-all ${saved ? "bg-[hsl(var(--neon-cyan))/20]" : ""}`}>
                <Icon name="Bookmark" size={20} className={saved ? "text-[hsl(var(--neon-cyan))]" : "text-white"} />
              </div>
              <span className="text-white text-xs font-semibold drop-shadow">{video.shares}</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                <Icon name="Share2" size={18} className="text-white" />
              </div>
            </button>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${video.avatarColor} flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20`}>
                {video.avatar}
              </div>
              <span className="text-white text-sm font-semibold">{video.user}</span>
              <button className="ml-auto text-xs glass px-2 py-0.5 rounded-full text-white font-medium">
                + Подписаться
              </button>
            </div>
            <p className="text-white text-sm font-medium leading-tight mb-1.5 pr-14">{video.title}</p>
            <div className="flex flex-wrap gap-1 pr-14">
              {video.tags.map((tag) => (
                <span key={tag} className="text-[hsl(var(--neon-cyan))] text-xs font-semibold">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedPage = () => {
  const [filter, setFilter] = useState<"all" | "following">("all");

  return (
    <div className="h-full overflow-y-auto">
      {/* Filter tabs */}
      <div className="sticky top-0 z-10 glass border-b border-white/5 px-5 pt-3 pb-2">
        <div className="flex gap-4">
          {[{ id: "all", label: "Для тебя" }, { id: "following", label: "Подписки" }].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as "all" | "following")}
              className={`text-sm font-semibold pb-2 border-b-2 transition-all ${
                filter === f.id
                  ? "border-[hsl(var(--neon-pink))] text-foreground"
                  : "border-transparent text-muted-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-3">
        {videos.map((video, i) => (
          <VideoCard key={video.id} video={video} index={i} />
        ))}
      </div>

      {/* Load more hint */}
      <div className="flex items-center justify-center py-6 text-muted-foreground text-sm gap-2">
        <Icon name="RefreshCw" size={15} />
        <span>Загрузка новых видео...</span>
      </div>
    </div>
  );
};

export default FeedPage;
