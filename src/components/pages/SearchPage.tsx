import { useState } from "react";
import Icon from "@/components/ui/icon";

const popularTags = [
  "#танцы", "#юмор", "#еда", "#лайфхак", "#спорт",
  "#путешествия", "#музыка", "#красота", "#животные", "#наука",
  "#мода", "#кино", "#игры", "#природа", "#технологии"
];

const categories = [
  { icon: "Music", label: "Музыка", color: "from-purple-500 to-pink-500" },
  { icon: "Dumbbell", label: "Спорт", color: "from-orange-500 to-red-500" },
  { icon: "ChefHat", label: "Еда", color: "from-yellow-400 to-orange-500" },
  { icon: "Laugh", label: "Юмор", color: "from-green-400 to-cyan-500" },
  { icon: "Plane", label: "Путешествия", color: "from-blue-400 to-indigo-600" },
  { icon: "Palette", label: "Арт", color: "from-pink-400 to-purple-600" },
  { icon: "Gamepad2", label: "Игры", color: "from-cyan-400 to-blue-600" },
  { icon: "Flower2", label: "Природа", color: "from-emerald-400 to-teal-600" },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="h-full overflow-y-auto">
      {/* Search bar */}
      <div className="px-4 pt-4 pb-3">
        <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
          focused ? "bg-[hsl(var(--surface-elevated))] ring-1 ring-[hsl(var(--neon-pink))]" : "bg-muted"
        }`}>
          <Icon name="Search" size={18} className="text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Поиск видео, авторов, хэштегов..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none font-golos"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
              <Icon name="X" size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Popular hashtags */}
      <div className="px-4 mb-5">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Популярные хэштеги</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              className="hashtag glass px-3 py-1.5 rounded-full text-sm transition-all hover:bg-white/10 active:scale-95"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Категории</h3>
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              className="animate-fade-in flex flex-col items-center gap-2 p-3 rounded-2xl glass hover:bg-white/10 transition-all active:scale-95"
              style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                <Icon name={cat.icon} size={22} className="text-white" />
              </div>
              <span className="text-xs font-medium text-foreground text-center leading-tight">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Trending searches */}
      <div className="px-4 mt-5">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Набирают популярность</h3>
        <div className="space-y-1">
          {["Танцы под новый трек Джастина", "Вирусный тренд с котами", "Лайфхаки для кухни", "Паркур в мегаполисе"].map((item, i) => (
            <button key={i} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-muted transition-colors text-left">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <Icon name="TrendingUp" size={14} className="text-[hsl(var(--neon-pink))]" />
              </div>
              <span className="text-sm text-foreground flex-1">{item}</span>
              <Icon name="ArrowUpRight" size={14} className="text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
