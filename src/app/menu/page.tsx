import WashiLayout from '@/components/WashiLayout';

export default function MenuPage() {
  return (
    <WashiLayout>
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <header className="text-center space-y-4">
          <span className="text-primary font-headline tracking-[0.4em] uppercase text-xs">Cuisine</span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface">和紙に綴る、鉄板の饗宴</h1>
          <p className="text-on-surface-variant font-body tracking-widest uppercase text-sm">Experience the Art of Teppan & Craft Spirits</p>
        </header>

        <section className="grid lg:grid-cols-2 gap-16">
          <article className="bg-surface-container washi-texture p-10 rounded-xl space-y-8 border border-white/5">
            <h2 className="font-headline text-3xl text-primary border-b border-white/10 pb-6 tracking-widest">Main Dishes</h2>
            <div className="space-y-12">
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-headline text-2xl font-bold text-on-surface">Sea-Breeze Signature</h3>
                  <span className="font-body text-primary font-semibold text-xl">¥3,200</span>
                </div>
                <p className="font-body text-on-surface-variant leading-relaxed">Paper-thin bonito shavings dancing over premium Hokkaido scallops and local octopus.</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-headline text-2xl font-bold text-on-surface">The Nocturnal Truffle</h3>
                  <span className="font-body text-primary font-semibold text-xl">¥4,500</span>
                </div>
                <p className="font-body text-on-surface-variant leading-relaxed">A fusion of earthy black truffle, wild mushrooms, and melt-in-your-mouth wagyu beef strips.</p>
              </div>
            </div>
          </article>

          <div className="space-y-8">
            <div className="bg-surface-container-high washi-texture p-10 rounded-xl relative overflow-hidden border border-white/5 h-full">
              <h2 className="font-headline text-3xl text-primary mb-10">Selection of Rare Sake</h2>
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-headline text-xl text-on-surface">Junmai Daiginjo "Yume"</h4>
                    <p className="text-on-surface-variant text-sm">Ethereal floral notes with a silky finish.</p>
                  </div>
                  <span className="text-primary font-semibold">¥1,800</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-headline text-xl text-on-surface">Koshu Aged Reserve</h4>
                    <p className="text-on-surface-variant text-sm">Vintage sake with complex earthy umami.</p>
                  </div>
                  <span className="text-primary font-semibold">¥2,400</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </WashiLayout>
  );
}
