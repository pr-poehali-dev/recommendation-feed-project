import { useState } from "react";
import Icon from "@/components/ui/icon";

const myVideos = [
  {
    id: 1,
    thumbnail: "https://cdn.poehali.dev/projects/d1be3cbc-c130-4886-9352-7cbb0dd74b50/files/ed0b9901-47e5-4c62-ad38-3fcce93eb17a.jpg",
    views: "124K",
  },
  {
    id: 2,
    thumbnail: "https://cdn.poehali.dev/projects/d1be3cbc-c130-4886-9352-7cbb0dd74b50/files/59942080-1af7-400a-8f9e-c785d5590958.jpg",
    views: "89K",
  },
  {
    id: 3,
    thumbnail: "https://cdn.poehali.dev/projects/d1be3cbc-c130-4886-9352-7cbb0dd74b50/files/b330da16-9e6a-4716-bb08-37ceb6494c7b.jpg",
    views: "67K",
  },
  {
    id: 4,
    thumbnail: "https://cdn.poehali.dev/projects/d1be3cbc-c130-4886-9352-7cbb0dd74b50/files/1bdf9835-1294-4c73-b62f-7f0a8b315982.jpg",
    views: "45K",
  },
];

const stats = [
  { label: "Видео", value: "28" },
  { label: "Подписчики", value: "14.2K" },
  { label: "Подписки", value: "312" },
  { label: "Лайки", value: "487K" },
];

const ProfilePage = () => {
  const [tab, setTab] = useState<"videos" | "liked">("videos");

  return (
    <div className="h-full overflow-y-auto">
      {/* Profile header */}
      <div className="px-4 pt-6 pb-4">
        {/* Settings */}
        <div className="flex justify-end mb-4">
          <button className="glass p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="Settings" size={20} />
          </button>
        </div>

        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-3xl font-black ring-4 ring-[hsl(var(--neon-pink))/30]">
              Ю
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center ring-2 ring-background">
              <Icon name="Camera" size={14} className="text-white" />
            </button>
          </div>
          <h2 className="text-lg font-black text-foreground mb-0.5">@твой_профиль</h2>
          <p className="text-sm text-muted-foreground text-center max-w-[220px] leading-snug">
            Снимаю жизнь такой, какая она есть ✨ <span className="hashtag">#влог #жизнь #творчество</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mt-5">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center glass rounded-xl py-2.5 px-1">
              <span className="text-base font-black gradient-text">{s.value}</span>
              <span className="text-[10px] text-muted-foreground font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-4">
          <button className="flex-1 gradient-primary text-white text-sm font-semibold py-2.5 rounded-xl neon-glow transition-all active:scale-95">
            Редактировать
          </button>
          <button className="flex-1 glass text-foreground text-sm font-semibold py-2.5 rounded-xl hover:bg-white/10 transition-all active:scale-95">
            Поделиться
          </button>
          <button className="glass p-2.5 rounded-xl text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="UserPlus" size={18} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border mx-4">
        {[{ id: "videos", icon: "Grid3X3", label: "Видео" }, { id: "liked", icon: "Heart", label: "Понравилось" }].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as "videos" | "liked")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold border-b-2 transition-all ${
              tab === t.id
                ? "border-[hsl(var(--neon-pink))] text-foreground"
                : "border-transparent text-muted-foreground"
            }`}
          >
            <Icon name={t.icon} size={16} />
            {t.label}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-2 gap-0.5 mt-0.5 px-0">
        {myVideos.map((v, i) => (
          <div
            key={v.id}
            className="animate-fade-in relative aspect-[9/14] overflow-hidden cursor-pointer group"
            style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
          >
            <img src={v.thumbnail} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Icon name="Eye" size={12} className="text-white" />
              <span className="text-white text-xs font-semibold">{v.views}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
