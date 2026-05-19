import { useState } from "react";
import Icon from "@/components/ui/icon";

interface UploadPageProps {
  onClose: () => void;
}

const UploadPage = ({ onClose }: UploadPageProps) => {
  const [step, setStep] = useState<"select" | "details">("select");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [dragOver, setDragOver] = useState(false);

  return (
    <div className="bg-[hsl(var(--surface))] rounded-t-3xl border-t border-white/10 font-golos">
      {/* Handle */}
      <div className="flex justify-center pt-3 pb-1">
        <div className="w-10 h-1 rounded-full bg-muted" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border">
        <h2 className="text-base font-bold text-foreground">Загрузить видео</h2>
        <button onClick={onClose} className="w-8 h-8 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <Icon name="X" size={18} />
        </button>
      </div>

      <div className="px-5 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
        {step === "select" ? (
          <>
            {/* Drop zone */}
            <div
              className={`relative border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-3 transition-all ${
                dragOver
                  ? "border-[hsl(var(--neon-pink))] bg-[hsl(var(--neon-pink))/5]"
                  : "border-border hover:border-[hsl(var(--neon-pink))/50]"
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={() => setDragOver(false)}
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center neon-glow">
                <Icon name="Upload" size={28} className="text-white" />
              </div>
              <div className="text-center">
                <p className="text-foreground font-semibold">Перетащите видео сюда</p>
                <p className="text-muted-foreground text-sm mt-1">MP4, MOV до 500MB</p>
              </div>
              <button
                onClick={() => setStep("details")}
                className="gradient-primary text-white text-sm font-semibold px-6 py-2.5 rounded-xl neon-glow transition-all active:scale-95"
              >
                Выбрать файл
              </button>
            </div>

            {/* Quick tips */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Советы</p>
              {[
                { icon: "Smartphone", text: "Снимайте вертикально 9:16 для лучшего охвата" },
                { icon: "Hash", text: "Добавляйте хэштеги — они помогают найти видео" },
                { icon: "Clock", text: "Видео 15–60 сек набирают больше просмотров" },
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl glass">
                  <Icon name={tip.icon} size={16} className="text-[hsl(var(--neon-cyan))] shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{tip.text}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Video preview stub */}
            <div className="relative aspect-[9/16] max-h-48 rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
              <div className="text-center">
                <Icon name="Video" size={36} className="text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">Превью видео</p>
              </div>
              <button
                onClick={() => setStep("select")}
                className="absolute top-2 right-2 glass p-1.5 rounded-lg text-muted-foreground"
              >
                <Icon name="RefreshCw" size={14} />
              </button>
            </div>

            {/* Title */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">Заголовок</label>
              <input
                type="text"
                placeholder="Опишите своё видео..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
                className="w-full bg-muted rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-[hsl(var(--neon-pink))] transition-all font-golos"
              />
              <p className="text-right text-xs text-muted-foreground mt-1">{title.length}/100</p>
            </div>

            {/* Tags */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">Хэштеги</label>
              <input
                type="text"
                placeholder="#тренд #видео #контент"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full bg-muted rounded-xl px-4 py-3 text-sm text-[hsl(var(--neon-cyan))] placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-[hsl(var(--neon-cyan))] transition-all font-golos"
              />
            </div>

            {/* Visibility */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">Доступ</label>
              <div className="flex gap-2">
                {["Всем", "Подписчикам", "Только мне"].map((v) => (
                  <button
                    key={v}
                    className="flex-1 glass text-xs font-medium py-2 rounded-xl hover:bg-white/10 transition-all first:gradient-primary first:text-white"
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Publish button */}
            <button className="w-full gradient-primary text-white font-bold py-4 rounded-2xl neon-glow transition-all active:scale-[0.98] text-base">
              Опубликовать
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
