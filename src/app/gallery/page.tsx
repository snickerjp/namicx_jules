import WashiLayout from '@/components/WashiLayout';

export default function GalleryPage() {
  return (
    <WashiLayout>
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        <header className="space-y-4">
          <span className="text-primary font-headline tracking-[0.4em] uppercase text-xs">Gallery</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface">THE COLLECTION：偏愛の空間</h1>
          <p className="text-on-surface-variant font-body tracking-widest uppercase text-sm">The Archive: Curating the Intersection of History and Passion</p>
        </header>

        <section className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 group relative overflow-hidden bg-surface-container border border-white/5 rounded-sm">
             <div className="aspect-[4/5] overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200" alt="Heritage" />
                <div className="absolute inset-0 chiaroscuro-mask"></div>
             </div>
             <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-headline text-2xl text-primary mb-2">Heritage Whispers</h3>
                <p className="text-on-surface-variant font-light text-sm">Tracing the ink back to the days when paper was our only trade.</p>
             </div>
          </div>
          <div className="md:col-span-7 group relative overflow-hidden bg-surface-container border border-white/5 rounded-sm">
             <div className="aspect-[16/9] overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75" src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=1200" alt="Teppan" />
                <div className="absolute inset-0 chiaroscuro-mask"></div>
             </div>
             <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-headline text-2xl text-primary mb-2">Forge & Flame</h3>
                <p className="text-on-surface-variant font-light text-sm">Where the artisan's heat transforms tradition into an edible masterpiece.</p>
             </div>
          </div>
        </section>
      </div>
    </WashiLayout>
  );
}
