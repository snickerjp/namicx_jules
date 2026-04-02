import WashiLayout from '@/components/WashiLayout';

export default function Home() {
  return (
    <WashiLayout>
      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-50"
            alt="Traditional Tokyo alleyway at night"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVL-QsbB4IwTiBlv9Iorv2nhKiEJr7uBuqyJr18b91BBlL2v6bmP_h6uXyagP_YUBoEl00wAyVUbtdJL52MpJ8hNDhd5gfRDCWlUWMDmMg00-f5RRzQurU4sn-ZRBimD4CuaiUsGxVyeQRsFPa6HPdzQJ4_BsB56JjyWp4Ya9I6X3JyxYFnCfaavUtKw7uK5sF2UPRN_cL_50VkY3yS2iuaHoDwrmDymhrpT2C9OEve7LZUlLcYom3Rs_rBPge4YWdD9_fNmkD5jLd"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Content Canvas */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full mt-20">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-4">
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl washi-text leading-tight tracking-tighter">
                『紙が紡いだ歴史を、<br />
                <span className="inline-block mt-4">鉄板の熱気で書き換える。』</span>
              </h1>
            </div>
            <div className="asymmetric-border flex flex-col items-start gap-8">
              <p className="font-body text-lg md:text-xl washi-text/90 tracking-wide max-w-xl leading-relaxed font-light">
                Ikebukuro Nami — A playground for adults where antiques and Teppan meet. Experience the refined art of Okonomiyaki in a moonlit nocturnal sanctuary.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <button className="group relative px-10 py-4 bg-transparent overflow-hidden">
                  <span className="absolute inset-0 border border-primary/40 group-hover:border-primary transition-colors"></span>
                  <span className="relative font-label text-primary tracking-[0.2em] font-medium flex items-center gap-3">
                    RESERVATIONS
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </span>
                </button>
                <a className="font-label text-on-surface/60 hover:text-primary transition-colors tracking-widest text-sm flex items-center gap-2" href="/menu">
                  EXPLORE MENU
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </WashiLayout>
  );
}
