import WashiLayout from '@/components/WashiLayout';

export default function AccessPage() {
  return (
    <WashiLayout>
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <header className="space-y-4 text-center">
          <span className="text-primary font-headline tracking-[0.4em] uppercase text-xs">Location</span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface">路地裏に灯る、大人の遊び場</h1>
        </header>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-12">
             <div className="space-y-10">
                <div className="space-y-2">
                   <h3 className="text-primary font-headline text-sm uppercase tracking-widest border-b border-primary/20 pb-2">Address</h3>
                   <p className="text-2xl text-on-surface font-body font-light">東京都豊島区池袋某所（路地裏の粋な場所）</p>
                </div>
                <div className="space-y-2">
                   <h3 className="text-primary font-headline text-sm uppercase tracking-widest border-b border-primary/20 pb-2">Hours</h3>
                   <p className="text-2xl text-on-surface font-body font-light">17:00 - 23:00 (L.O. 22:00)</p>
                   <p className="text-on-surface-variant text-sm font-body">Closed: Sundays and Public Holidays</p>
                </div>
             </div>
             <div className="p-8 bg-surface-container border border-white/5 rounded-lg italic font-body text-on-surface-variant leading-relaxed">
               "A hidden gem in the backstreets of Ikebukuro, where the original paper warehouse once stood."
             </div>
          </div>

          <div className="lg:col-span-7">
             <div className="relative w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden bg-surface-container-high border border-white/10 shadow-2xl">
                <div className="absolute inset-0 grayscale contrast-125 brightness-50 opacity-60">
                   <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvKrdwKe8wMalItsvx7-T-quEtWnntbtAWyAARFBLJXBsKFrpfpL4GxmbXNNewc0RXcXT3fF-5VuGBamYNjXqR5uOPS6G8x9EY4r9jrRoz6MvOoHmR1n_oFnQ4K2cA7dxQsVivWrYISe8UBynsjW1YceEQUfBbi_2qFFDJyRN_Lgr9TCJD9afhXBYIUYH1r4MAh00VBf5bWrkn9nTxQW67uGAOTSm7moJ9uaoPf7vtq_rDlO3bjHO2v4o5tBJZaEs4G32k3_yp694I" alt="Map Texture" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse rounded-full"></div>
                      <div className="relative flex flex-col items-center">
                         <span className="material-symbols-outlined text-primary text-5xl">location_on</span>
                         <div className="mt-2 bg-surface-container-high/90 backdrop-blur-md px-4 py-2 border border-primary/20 rounded shadow-xl">
                            <p className="text-primary font-headline text-sm">Ikebukuro Nami</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </WashiLayout>
  );
}
