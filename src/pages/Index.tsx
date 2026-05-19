import { useState } from "react";
import Icon from "@/components/ui/icon";

const categories = [
  { id: "all", label: "Всё" },
  { id: "a4", label: "А4" },
  { id: "daniks", label: "Daniks" },
  { id: "batek", label: "BATEK" },
  { id: "music", label: "Музыка" },
  { id: "gaming", label: "Игры" },
  { id: "humor", label: "Юмор" },
  { id: "education", label: "Обучение" },
];

const videos = [
  // А4
  {
    id: "gNFjVBqVx6o",
    title: "Я ПРОВЁЛ 24 ЧАСА В ЛЕСУ ОДИН — выжил?",
    channel: "А4",
    views: "18 млн просмотров",
    age: "1 год назад",
    duration: "19:32",
    category: "a4",
  },
  {
    id: "Xb9RgFiPHqQ",
    title: "КУПИЛ ВСЁ ЧТО ПОПРОСИЛ НЕЗНАКОМЕЦ — реакция людей",
    channel: "А4",
    views: "22 млн просмотров",
    age: "1 год назад",
    duration: "15:44",
    category: "a4",
  },
  {
    id: "rE7GCmFDoQ8",
    title: "ПОСЛЕДНИЙ кто УБЕРЁТ РУКУ — получит 1 000 000 рублей",
    channel: "А4",
    views: "31 млн просмотров",
    age: "2 года назад",
    duration: "21:08",
    category: "a4",
  },
  {
    id: "HzEHIUBSFVA",
    title: "СНЯЛ КВАРТИРУ НА 1 НОЧЬ ЗА 1 000 000 рублей",
    channel: "А4",
    views: "25 млн просмотров",
    age: "1 год назад",
    duration: "17:55",
    category: "a4",
  },
  // Daniks
  {
    id: "JNsyeIEOCY4",
    title: "Daniks — ЧТО БУДЕТ если ЖИТЬ КАК БЕДНЫЙ vs БОГАТЫЙ",
    channel: "Daniks",
    views: "9 млн просмотров",
    age: "1 год назад",
    duration: "14:22",
    category: "daniks",
  },
  {
    id: "3LvAoMxFyOI",
    title: "Daniks — ПОСЛЕДНИЙ кто ВЫЙДЕТ ИЗ МАГАЗИНА выиграет iPhone",
    channel: "Daniks",
    views: "7 млн просмотров",
    age: "1 год назад",
    duration: "16:10",
    category: "daniks",
  },
  {
    id: "SZqDyc1e_fY",
    title: "Daniks — Я СТАЛ БОМЖОМ НА 24 ЧАСА в Москве",
    channel: "Daniks",
    views: "11 млн просмотров",
    age: "2 года назад",
    duration: "18:45",
    category: "daniks",
  },
  {
    id: "cKOBs8_pBMQ",
    title: "Daniks — НАШЁЛ 1 000 000 РУБЛЕЙ на улице — что сделал?",
    channel: "Daniks",
    views: "13 млн просмотров",
    age: "1 год назад",
    duration: "13:58",
    category: "daniks",
  },
  // BATEK_OFFICIAL
  {
    id: "YV3sZqM-RjQ",
    title: "БАТЕК — РЕАКЦИЯ ОТЦА на ОЦЕНКИ СЫНА",
    channel: "BATEK_OFFICIAL",
    views: "6 млн просмотров",
    age: "1 год назад",
    duration: "10:22",
    category: "batek",
  },
  {
    id: "SqsLbH5aznc",
    title: "БАТЕК — ОТЕЦ vs СЫН: Кто лучше играет в FIFA?",
    channel: "BATEK_OFFICIAL",
    views: "5 млн просмотров",
    age: "1 год назад",
    duration: "12:15",
    category: "batek",
  },
  {
    id: "xgEkwDpCjYc",
    title: "БАТЕК — 24 ЧАСА С ПАПОЙ: выжили?",
    channel: "BATEK_OFFICIAL",
    views: "8 млн просмотров",
    age: "2 года назад",
    duration: "20:04",
    category: "batek",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Rick Astley — Never Gonna Give You Up",
    channel: "Rick Astley",
    views: "1.5 млрд просмотров",
    age: "15 лет назад",
    duration: "3:32",
    category: "music",
  },
  {
    id: "9bZkp7q19f0",
    title: "PSY — Gangnam Style (강남스타일) M/V",
    channel: "officialpsy",
    views: "5.3 млрд просмотров",
    age: "12 лет назад",
    duration: "4:13",
    category: "music",
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Luis Fonsi — Despacito ft. Daddy Yankee",
    channel: "Luis Fonsi",
    views: "8.4 млрд просмотров",
    age: "7 лет назад",
    duration: "4:41",
    category: "music",
  },
  {
    id: "JGwWNGJdvx8",
    title: "Ed Sheeran — Shape of You (Official Video)",
    channel: "Ed Sheeran",
    views: "6.1 млрд просмотров",
    age: "7 лет назад",
    duration: "4:24",
    category: "music",
  },
  {
    id: "RgKAFK5djSk",
    title: "Wiz Khalifa — See You Again ft. Charlie Puth",
    channel: "Wiz Khalifa",
    views: "6.3 млрд просмотров",
    age: "9 лет назад",
    duration: "3:57",
    category: "music",
  },
  {
    id: "OPf0YbXqDm0",
    title: "Mark Ronson — Uptown Funk ft. Bruno Mars",
    channel: "Mark Ronson",
    views: "4.9 млрд просмотров",
    age: "9 лет назад",
    duration: "4:31",
    category: "music",
  },
  {
    id: "pRpeEdMmmQ0",
    title: "Shakira — Waka Waka (FIFA World Cup Song)",
    channel: "Shakira",
    views: "3.7 млрд просмотров",
    age: "14 лет назад",
    duration: "3:34",
    category: "music",
  },
  {
    id: "hT_nvWreIhg",
    title: "OneRepublic — Counting Stars",
    channel: "OneRepublic",
    views: "3.5 млрд просмотров",
    age: "10 лет назад",
    duration: "4:17",
    category: "music",
  },
  {
    id: "2vjPBrBU-TM",
    title: "Maroon 5 — Sugar (Official Music Video)",
    channel: "Maroon 5",
    views: "3.8 млрд просмотров",
    age: "9 лет назад",
    duration: "3:55",
    category: "music",
  },
  {
    id: "fRh_vgS2dFE",
    title: "Justin Bieber — Sorry (PURPOSE: The Movement)",
    channel: "Justin Bieber",
    views: "3.4 млрд просмотров",
    age: "8 лет назад",
    duration: "3:20",
    category: "music",
  },
  {
    id: "60ItHLz5WEA",
    title: "Alan Walker — Faded",
    channel: "Alan Walker",
    views: "3.9 млрд просмотров",
    age: "8 лет назад",
    duration: "3:33",
    category: "music",
  },
  {
    id: "SlPhMPnQ58k",
    title: "Eminem — Lose Yourself (Official Video)",
    channel: "Eminem",
    views: "1.1 млрд просмотров",
    age: "20 лет назад",
    duration: "5:20",
    category: "music",
  },
];

interface PlayerProps {
  videoId: string;
  onClose: () => void;
}

const Player = ({ videoId, onClose }: PlayerProps) => {
  const video = videos.find(v => v.id === videoId);
  const related = videos.filter(v => v.id !== videoId).slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      {/* Top bar */}
      <div className="sticky top-0 z-10 glass border-b border-white/5 px-4 py-3 flex items-center gap-3">
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <Icon name="ArrowLeft" size={20} />
        </button>
        <span className="text-white font-semibold text-sm truncate flex-1">{video?.title}</span>
      </div>

      {/* Video player */}
      <div className="w-full bg-black" style={{ aspectRatio: "16/9" }}>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          style={{ border: "none" }}
        />
      </div>

      {/* Video info */}
      <div className="px-4 py-4 border-b border-white/5">
        <h1 className="text-white font-bold text-base leading-snug mb-2">{video?.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
          <span>{video?.views}</span>
          <span>•</span>
          <span>{video?.age}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
            {video?.channel[0]}
          </div>
          <div>
            <p className="text-white text-sm font-semibold">{video?.channel}</p>
            <p className="text-gray-400 text-xs">Официальный канал</p>
          </div>
          <button className="ml-auto bg-white text-black text-sm font-bold px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
            Подписаться
          </button>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {[
            { icon: "ThumbsUp", label: "Нравится" },
            { icon: "ThumbsDown", label: "Не нравится" },
            { icon: "Share2", label: "Поделиться" },
            { icon: "Download", label: "Скачать" },
            { icon: "Flag", label: "Жалоба" },
          ].map((a) => (
            <button
              key={a.label}
              className="flex items-center gap-1.5 glass px-3 py-2 rounded-full text-white text-xs font-medium whitespace-nowrap hover:bg-white/10 transition-colors"
            >
              <Icon name={a.icon} size={14} />
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Related videos */}
      <div className="px-4 py-4">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Похожие видео</p>
        <div className="space-y-3">
          {related.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                onClose();
                setTimeout(() => {
                  document.dispatchEvent(new CustomEvent("playVideo", { detail: v.id }));
                }, 100);
              }}
              className="w-full flex gap-3 text-left hover:bg-white/5 rounded-xl p-2 transition-colors"
            >
              <div className="relative rounded-lg overflow-hidden flex-shrink-0 w-32" style={{ aspectRatio: "16/9" }}>
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded font-mono">
                  {v.duration}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium leading-snug line-clamp-2">{v.title}</p>
                <p className="text-gray-400 text-xs mt-1">{v.channel}</p>
                <p className="text-gray-500 text-xs">{v.views}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = videos.filter((v) => {
    const matchCat = category === "all" || v.category === category;
    const matchSearch = v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.channel.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  if (activeVideo) {
    return <Player videoId={activeVideo} onClose={() => setActiveVideo(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-golos">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/5">
        <div className="flex items-center gap-3 px-4 py-3">
          {/* Logo */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1">
            <Icon name="Menu" size={22} />
          </button>
          <div className="flex items-center gap-1.5 mr-auto">
            <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center">
              <Icon name="Play" size={14} className="text-white ml-0.5" />
            </div>
            <span className="text-white font-black text-lg tracking-tight">
              YouTube<span className="text-red-500">без VPN</span>
            </span>
          </div>
          <button className="text-white p-1">
            <Icon name="Cast" size={20} />
          </button>
          <button className="text-white p-1">
            <Icon name="Bell" size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-white text-sm font-bold">
            Я
          </div>
        </div>

        {/* Search bar */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 bg-white/8 rounded-full px-4 py-2.5 border border-white/10 focus-within:border-white/30 transition-colors">
            <Icon name="Search" size={16} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Поиск видео..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder:text-gray-500 text-sm outline-none font-golos"
            />
            {search && (
              <button onClick={() => setSearch("")} className="text-gray-500 hover:text-white transition-colors">
                <Icon name="X" size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                category === cat.id
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      {/* Video grid */}
      <main className="px-3 py-4">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <Icon name="SearchX" size={48} className="mb-4 opacity-50" />
            <p className="text-lg font-semibold">Ничего не найдено</p>
            <p className="text-sm mt-1">Попробуй другой запрос</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {filtered.map((video, i) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                className="text-left group animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
              >
                {/* Thumbnail */}
                <div className="relative rounded-xl overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                    }}
                  />
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/90 text-white text-xs px-1.5 py-0.5 rounded font-mono font-bold">
                    {video.duration}
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100">
                      <Icon name="Play" size={22} className="text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex gap-3 mt-3 px-1">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5">
                    {video.channel[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-red-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">{video.channel}</p>
                    <p className="text-gray-500 text-xs">{video.views} • {video.age}</p>
                  </div>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-500 hover:text-white transition-colors p-1 shrink-0"
                  >
                    <Icon name="MoreVertical" size={16} />
                  </button>
                </div>
              </button>
            ))}
          </div>
        )}
      </main>

      {/* Bottom notice */}
      <div className="px-4 py-6 text-center text-gray-600 text-xs border-t border-white/5">
        <p>Контент предоставляется YouTube через официальный embed-API</p>
        <p className="mt-1">Работает без VPN на территории РФ</p>
      </div>
    </div>
  );
};

export default Index;