import { useState } from "react";
import Icon from "@/components/ui/icon";

const chats = [
  {
    id: 1,
    user: "Дарья 🌟",
    avatar: "Д",
    color: "from-pink-500 to-purple-600",
    last: "Видела твой новый ролик — огонь! 🔥",
    time: "2 мин",
    unread: 3,
    online: true,
  },
  {
    id: 2,
    user: "Максим Повар",
    avatar: "М",
    color: "from-red-500 to-orange-500",
    last: "Лови рецепт, о котором спрашивал",
    time: "15 мин",
    unread: 1,
    online: true,
  },
  {
    id: 3,
    user: "Иван Extreme",
    avatar: "И",
    color: "from-cyan-400 to-blue-600",
    last: "Едем снимать в субботу?",
    time: "1 ч",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    user: "Котик Флуффи 🐱",
    avatar: "К",
    color: "from-orange-400 to-pink-500",
    last: "Мяу 😸",
    time: "3 ч",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    user: "Анна Путешественник",
    avatar: "А",
    color: "from-blue-400 to-indigo-600",
    last: "Фото с Бали уже в ленте!",
    time: "вчера",
    unread: 0,
    online: false,
  },
];

const MessagesPage = () => {
  const [search, setSearch] = useState("");
  const filtered = chats.filter(c => c.user.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="h-full overflow-y-auto">
      {/* Search */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center gap-3 bg-muted rounded-2xl px-4 py-3">
          <Icon name="Search" size={16} className="text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Поиск сообщений..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-golos"
          />
        </div>
      </div>

      {/* New message button */}
      <div className="px-4 mb-4">
        <button className="w-full flex items-center gap-3 p-3 rounded-2xl border border-dashed border-[hsl(var(--neon-pink))/40] text-[hsl(var(--neon-pink))] hover:bg-[hsl(var(--neon-pink))/5] transition-colors">
          <Icon name="Plus" size={18} />
          <span className="text-sm font-semibold">Новое сообщение</span>
        </button>
      </div>

      {/* Chat list */}
      <div className="px-4 space-y-1">
        {filtered.map((chat, i) => (
          <button
            key={chat.id}
            className="animate-fade-in w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-muted transition-all active:scale-[0.98] text-left"
            style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
          >
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${chat.color} flex items-center justify-center text-white font-bold text-base`}>
                {chat.avatar}
              </div>
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-background" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-sm font-semibold text-foreground truncate">{chat.user}</span>
                <span className="text-[11px] text-muted-foreground shrink-0 ml-2">{chat.time}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate">{chat.last}</p>
            </div>

            {/* Unread */}
            {chat.unread > 0 && (
              <div className="shrink-0 w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-[10px] text-white font-bold">{chat.unread}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
