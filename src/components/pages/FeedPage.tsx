import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

const videos = [
  {
    id: 1,
    youtubeId: "HcXNPI-IPPM",
    user: "@дарья_танцует",
    avatar: "Д",
    avatarColor: "from-pink-500 to-purple-600",
    title: "Танец под трек Big Baby Tape — вирусный челлендж 🌃",
    tags: ["#танцы", "#вирусное", "#челлендж"],
    likes: "124K",
    comments: "3.2K",
    shares: "18K",
  },
  {
    id: 2,
    youtubeId: "iik25wqIuFo",
    user: "@котик_флуффи",
    avatar: "К",
    avatarColor: "from-orange-400 to-pink-500",
    title: "Самые смешные коты 2024 😹 Не могу остановиться",
    tags: ["#коты", "#смешное", "#животные"],
    likes: "89K",
    comments: "5.8K",
    shares: "41K",
  },
  {
    id: 3,
    youtubeId: "E7MBR_oRDjI",
    user: "@chef_максим",
    avatar: "М",
    avatarColor: "from-red-500 to-orange-500",
    title: "Паста карбонара за 10 минут — идеальный рецепт 🍝",
    tags: ["#еда", "#рецепты", "#готовим"],
    likes: "67K",
    comments: "2.1K",
    shares: "9K",
  },
  {
    id: 4,
    youtubeId: "2lAe1cqCOXo",
    user: "@extreme_ivan",
    avatar: "И",
    avatarColor: "from-cyan-400 to-blue-600",
    title: "Паркур по городу — лучшие моменты ⚡",
    tags: ["#паркур", "#экстрим", "#спорт"],
    likes: "201K",
    comments: "8.7K",
    shares: "55K",
  },
  {
    id: 5,
    youtubeId: "dQw4w9WgXcQ",
    user: "@ретро_волна",
    avatar: "Р",
    avatarColor: "from-violet-500 to-indigo-600",
    title: "Классика навсегда 🎵 Этот трек не стареет",
    tags: ["#музыка", "#классика", "#ностальгия"],
    likes: "312K",
    comments: "14K",
    shares: "98K",
  },
  {
    id: 6,
    youtubeId: "9bZkp7q19f0",
    user: "@k_pop_lover",
    avatar: "K",
    avatarColor: "from-emerald-400 to-teal-600",
    title: "PSY — Gangnam Style 🎤 Вечный хит",
    tags: ["#kpop", "#музыка", "#хит"],
    likes: "445K",
    comments: "22K",
    shares: "110K",
  },
];

const VideoSlide = ({ video, isActive }: { video: typeof videos[0]; isActive: boolean }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  return (
    <div className="relative w-full h-full bg-black flex-shrink-0 snap-start">
      {/* YouTube embed */}
      <div className="absolute inset-0">
        {!playerReady && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <div className="w-12 h-12 rounded-full border-2 border-pink-500 border-t-transparent animate-spin" />
          </div>
        )}
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=${isActive ? 1 : 0}&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          onLoad={() => setPlayerReady(true)}
          style={{ border: "none", pointerEvents: "none" }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 pointer-events-none" />

      {/* Right action bar */}
      <div className="absolute right-4 bottom-32 flex flex-col gap-5 items-center z-20">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${video.avatarColor} flex items-center justify-center text-white font-bold text-lg ring-2 ring-white/30`}>
          {video.avatar}
        </div>

        <button
          onClick={() => setLiked(!liked)}
          className="flex flex-col items-center gap-1"
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-90 ${liked ? "bg-pink-500/30" : "bg-black/30 backdrop-blur-sm"}`}>
            <Icon name="Heart" size={26} className={liked ? "text-pink-400" : "text-white"} />
          </div>
          <span className="text-white text-xs font-bold drop-shadow">{video.likes}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <Icon name="MessageCircle" size={24} className="text-white" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow">{video.comments}</span>
        </button>

        <button
          onClick={() => setSaved(!saved)}
          className="flex flex-col items-center gap-1"
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${saved ? "bg-cyan-400/30" : "bg-black/30 backdrop-blur-sm"}`}>
            <Icon name="Bookmark" size={24} className={saved ? "text-cyan-300" : "text-white"} />
          </div>
          <span className="text-white text-xs font-bold drop-shadow">{video.shares}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <Icon name="Share2" size={22} className="text-white" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow">Поделиться</span>
        </button>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-16 p-5 z-20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-bold text-sm">{video.user}</span>
          <button className="text-xs border border-white/50 px-2.5 py-0.5 rounded-full text-white font-medium hover:bg-white/20 transition-colors">
            + Подписаться
          </button>
        </div>
        <p className="text-white text-sm font-medium leading-snug mb-2">{video.title}</p>
        <div className="flex flex-wrap gap-1.5">
          {video.tags.map((tag) => (
            <span key={tag} className="text-cyan-300 text-xs font-bold">{tag}</span>
          ))}
        </div>

        {/* Music bar */}
        <div className="flex items-center gap-2 mt-3">
          <Icon name="Music2" size={13} className="text-white/70" />
          <div className="flex-1 overflow-hidden">
            <div className="text-white/70 text-xs whitespace-nowrap animate-[marquee_8s_linear_infinite]">
              Оригинальный звук • {video.user}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mode, setMode] = useState<"scroll" | "grid">("scroll");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const height = containerRef.current.clientHeight;
    const idx = Math.round(scrollTop / height);
    setActiveIdx(idx);
  };

  if (mode === "grid") {
    return (
      <div className="h-full overflow-y-auto">
        <div className="sticky top-0 z-10 glass border-b border-white/5 px-5 pt-3 pb-2 flex items-center justify-between">
          <div className="flex gap-4">
            {["Для тебя", "Подписки"].map((label, i) => (
              <button key={i} className={`text-sm font-semibold pb-2 border-b-2 transition-all ${i === 0 ? "border-pink-500 text-foreground" : "border-transparent text-muted-foreground"}`}>
                {label}
              </button>
            ))}
          </div>
          <button onClick={() => setMode("scroll")} className="text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="Rows3" size={18} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-0.5 mt-0.5">
          {videos.map((v, i) => (
            <button
              key={v.id}
              onClick={() => { setActiveIdx(i); setMode("scroll"); }}
              className="relative aspect-[9/14] overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
            >
              <img
                src={`https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`}
                alt={v.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2">
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Play" size={12} className="text-white" />
                  <span className="text-white text-xs font-semibold">{v.likes}</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon name="Play" size={18} className="text-white ml-0.5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full">
      {/* Top controls overlay */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 py-3">
        <div className="flex gap-5">
          {["Для тебя", "Подписки"].map((label, i) => (
            <button key={i} className={`text-sm font-bold transition-all drop-shadow ${i === 0 ? "text-white border-b-2 border-white pb-0.5" : "text-white/60"}`}>
              {label}
            </button>
          ))}
        </div>
        <button onClick={() => setMode("grid")} className="text-white/70 hover:text-white transition-colors">
          <Icon name="Grid3X3" size={20} />
        </button>
      </div>

      {/* Vertical scroll feed */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {videos.map((video, i) => (
          <div key={video.id} className="w-full h-full snap-start snap-always">
            <VideoSlide video={video} isActive={activeIdx === i} />
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        {videos.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === activeIdx ? "w-1.5 h-5 bg-white" : "w-1 h-1 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
