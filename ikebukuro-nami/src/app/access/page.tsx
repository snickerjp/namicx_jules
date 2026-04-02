import WashiLayout from '@/components/WashiLayout';

export default function AccessPage() {
  return (
    <WashiLayout>
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <header className="space-y-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif-jp text-accent tracking-tighter">路地裏に灯る、大人の遊び場</h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
             <div className="aspect-video w-full bg-deep-navy border border-white/10 rounded-sm overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 flex items-center justify-center text-blue-grey/20 uppercase tracking-widest text-xs">
                   Customized Map Placeholder
                </div>
                {/* Mock Map View */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,187,108,0.1)_0%,rgba(1,12,30,1)_80%)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full border-2 border-deep-navy"></div>
             </div>

             <div className="space-y-8 font-sans">
                <div className="space-y-1">
                  <h3 className="text-secondary tracking-widest uppercase text-xs font-semibold">Address</h3>
                  <p className="text-xl text-washi-white">東京都豊島区池袋某所（路地裏の粋な場所）</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-secondary tracking-widest uppercase text-xs font-semibold">Hours</h3>
                  <p className="text-xl text-washi-white">17:00 - 23:00 (Last Order 22:00)</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-secondary tracking-widest uppercase text-xs font-semibold">Closed</h3>
                  <p className="text-xl text-washi-white">Sundays and Public Holidays</p>
                </div>
             </div>
          </div>

          <div className="relative h-[600px] w-full bg-cover bg-center rounded-sm grayscale shadow-2xl" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2000')"}}>
             <div className="absolute inset-0 bg-deep-navy/40"></div>
             <div className="absolute bottom-12 left-12 max-w-sm space-y-4">
               <p className="text-blue-grey text-sm leading-relaxed italic">
                 "A hidden gem in the backstreets of Ikebukuro, where the original paper warehouse once stood."
               </p>
               <div className="w-12 h-px bg-accent"></div>
             </div>
          </div>
        </div>
      </div>
    </WashiLayout>
  );
}
