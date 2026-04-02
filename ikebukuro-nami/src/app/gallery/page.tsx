import WashiLayout from '@/components/WashiLayout';

export default function GalleryPage() {
  const images = [
    { title: "Heritage Whispers", subtitle: "継承される声", url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200" },
    { title: "Distant Shores", subtitle: "異国の風と古雅", url: "https://images.unsplash.com/photo-1555392858-4509118d1bb0?auto=format&fit=crop&q=80&w=1200" },
    { title: "Forge & Flame", subtitle: "静寂の中の熱気", url: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=1200" },
    { title: "Ephemeral Fibers", subtitle: "紙卸の記憶", url: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=1200" }
  ];

  return (
    <WashiLayout>
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <header className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif-jp text-accent tracking-tighter">THE COLLECTION</h2>
          <p className="text-blue-grey tracking-widest uppercase text-sm">Curating the Intersection of History and Passion</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer shadow-xl">
              <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" style={{backgroundImage: `url('${img.url}')`}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-8 left-8 space-y-1">
                <h3 className="text-2xl font-serif text-accent">{img.title}</h3>
                <p className="text-washi-white/60 text-xs tracking-[0.2em] uppercase">{img.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WashiLayout>
  );
}
