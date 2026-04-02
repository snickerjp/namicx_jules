import WashiLayout from '@/components/WashiLayout';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <WashiLayout>
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-luminosity" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2560')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 chiaroscuro">
          <FadeIn direction="up" delay={0.2} duration={1.2}>
            <h1 className="text-5xl md:text-7xl font-serif-jp tracking-tighter text-washi-white drop-shadow-2xl leading-tight">
              紙が紡いだ歴史を、<br className="md:hidden" />
              鉄板の熱気で書き換える。
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} duration={1.2}>
            <p className="text-lg md:text-xl font-sans tracking-[0.2em] text-blue-grey uppercase">
              Ikebukuro Nami - A playground for adults where antiques and Teppan meet.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} duration={1.2}>
            <div className="pt-12">
              <a href="/menu" className="inline-block border border-accent/60 text-accent px-12 py-4 rounded-sm hover:bg-accent hover:text-deep-navy transition-all tracking-widest uppercase text-sm font-medium">
                View Menu
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={1.2} duration={2}>
          <div className="absolute bottom-12 right-12 z-10 hidden lg:block opacity-60">
             <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center text-[10px] tracking-tighter text-white font-serif uppercase">Aloha</div>
          </div>
        </FadeIn>
      </section>
    </WashiLayout>
  );
}
