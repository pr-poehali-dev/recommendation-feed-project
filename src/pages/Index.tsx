import { useState } from "react";
import Icon from "@/components/ui/icon";
import FeedPage from "@/components/pages/FeedPage";
import SearchPage from "@/components/pages/SearchPage";
import UploadPage from "@/components/pages/UploadPage";
import MessagesPage from "@/components/pages/MessagesPage";
import ProfilePage from "@/components/pages/ProfilePage";
import TrendsPage from "@/components/pages/TrendsPage";

type Tab = "feed" | "search" | "trends" | "messages" | "profile";

const navItems = [
  { id: "feed" as Tab, icon: "Home", label: "Лента" },
  { id: "search" as Tab, icon: "Search", label: "Поиск" },
  { id: "trends" as Tab, icon: "TrendingUp", label: "Тренды" },
  { id: "messages" as Tab, icon: "MessageCircle", label: "Сообщения" },
  { id: "profile" as Tab, icon: "User", label: "Профиль" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("feed");
  const [uploadOpen, setUploadOpen] = useState(false);

  const renderPage = () => {
    switch (activeTab) {
      case "feed": return <FeedPage />;
      case "search": return <SearchPage />;
      case "trends": return <TrendsPage />;
      case "messages": return <MessagesPage />;
      case "profile": return <ProfilePage />;
      default: return <FeedPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-golos flex flex-col max-w-md mx-auto relative">
      {/* Header */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 glass border-b border-white/5">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-xl font-black gradient-text tracking-tight">ВидеоПоток</span>
          <div className="flex gap-2">
            <button
              onClick={() => setUploadOpen(true)}
              className="flex items-center gap-1.5 gradient-primary text-white text-sm font-semibold px-3 py-1.5 rounded-full neon-glow transition-all active:scale-95"
            >
              <Icon name="Plus" size={15} />
              <span>Загрузить</span>
            </button>
            <button className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Bell" size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 pt-[60px] pb-[72px] overflow-hidden">
        {renderPage()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 glass border-t border-white/5">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? "text-[hsl(var(--neon-pink))]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className={`relative ${activeTab === item.id ? "scale-110" : ""} transition-transform`}>
                <Icon name={item.icon} size={22} />
                {activeTab === item.id && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[hsl(var(--neon-pink))]" />
                )}
              </div>
              <span className={`text-[10px] font-medium ${activeTab === item.id ? "font-semibold" : ""}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Upload Modal */}
      {uploadOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center"
          onClick={() => setUploadOpen(false)}
        >
          <div
            className="w-full max-w-md animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <UploadPage onClose={() => setUploadOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
