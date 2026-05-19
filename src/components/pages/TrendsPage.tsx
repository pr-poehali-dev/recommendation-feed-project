import Icon from "@/components/ui/icon";

const trends = [
  { rank: 1, tag: "#ГородскойТанец", views: "2.4M просмотров", growth: "+340%", hot: true },
  { rank: 2, tag: "#КотПрыгает", views: "1.8M просмотров", growth: "+210%", hot: true },
  { rank: 3, tag: "#ЕдаЗа60Секунд", views: "1.2M просмотров", growth: "+155%", hot: false },
  { rank: 4, tag: "#ПаркурМосква", views: "980K просмотров", growth: "+98%", hot: false },
  { rank: 5, tag: "#ЛайфхакДня", views: "760K просмотров", growth: "+87%", hot: false },
  { rank: 6, tag: "#ВирусныйЧеллендж", views: "640K просмотров", growth: "+73%", hot: false },
  { rank: 7, tag: "#МузыкаБезСлов", views: "520K просмотров", growth: "+61%", hot: false },
  { rank: 8, tag: "#СмешноеВидео", views: "410K просмотров", growth: "+44%", hot: false },
];

const featured = [
  { title: "Танцевальный челлендж", count: "12.4K видео", color: "from-pink-500 to-purple-600", icon: "Music2" },
  { title: "Котики недели", count: "8.1K видео", color: "from-orange-400 to-yellow-400", icon: "Star" },
  { title: "Рецепты быстро", count: "6.7K видео", color: "from-red-400 to-orange-500", icon: "Zap" },
];

const TrendsPage = () => {
  return (
    <div className="h-full overflow-y-auto px-4 pt-4">
      {/* Featured trends */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Icon name="Flame" size={18} className="text-[hsl(var(--neon-pink))]" />
          <h2 className="text-base font-bold text-foreground">В огне сейчас</h2>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {featured.map((f, i) => (
            <div
              key={i}
              className="animate-fade-in relative rounded-2xl overflow-hidden cursor-pointer active:scale-98 transition-transform"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className={`h-20 bg-gradient-to-r ${f.color} p-4 flex items-center justify-between`}>
                <div>
                  <p className="text-white font-bold text-base">{f.title}</p>
                  <p className="text-white/70 text-sm">{f.count}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name={f.icon} size={22} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending hashtags */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Icon name="Hash" size={18} className="text-[hsl(var(--neon-cyan))]" />
          <h2 className="text-base font-bold text-foreground">Хэштеги</h2>
        </div>
        <div className="space-y-2">
          {trends.map((trend, i) => (
            <button
              key={trend.rank}
              className="animate-fade-in w-full flex items-center gap-3 p-3 rounded-2xl glass hover:bg-white/10 transition-all active:scale-[0.98] text-left"
              style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}
            >
              <span className={`w-7 h-7 flex items-center justify-center text-sm font-black rounded-lg ${
                trend.rank <= 3 ? "gradient-primary text-white" : "bg-muted text-muted-foreground"
              }`}>
                {trend.rank}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold hashtag">{trend.tag}</span>
                  {trend.hot && (
                    <span className="text-[10px] gradient-primary text-white px-1.5 py-0.5 rounded-full font-semibold">HOT</span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{trend.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="TrendingUp" size={13} className="text-emerald-400" />
                <span className="text-emerald-400 text-xs font-semibold">{trend.growth}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendsPage;
