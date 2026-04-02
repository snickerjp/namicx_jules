import WashiLayout from '@/components/WashiLayout';

export default function StoryPage() {
  return (
    <WashiLayout>
      <section className="relative min-h-screen bg-background flex flex-col justify-center overflow-hidden py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-12 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-primary font-headline tracking-[0.3em] uppercase text-sm block">Heritage & Concept</span>
                <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] tracking-tight text-on-surface">
                  紙から鉄板へ — <br />
                  <span className="text-primary">継承される「粋」の精神</span>
                </h1>
              </div>
              <div className="space-y-8 text-on-surface-variant font-body text-lg md:text-xl leading-relaxed max-w-2xl">
                <p>
                  池袋の喧騒を抜けた路地裏。かつて「和紙を扱う紙卸」として栄えたこの場所は、今、鉄板の熱気と骨董の静寂が交差する大人の遊び場へと姿を変えました。
                </p>
                <p>
                  オーナーの審美眼によって集められた骨董品が、かつての紙卸の記憶を繋ぎ止め、その中にふわりと紛れ込むハワイの風。一見すると相反する要素が、この「なみ」という空間では不思議な調和を奏でています。
                </p>
                <div className="pt-6">
                  <p className="font-headline italic text-on-surface border-l-2 border-primary/40 pl-6 py-2">
                    格式張りすぎず、しかし本質を知る大人が「粋」を感じる場所。それが、池袋 なみの願いです。
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative z-20 aspect-[4/5] md:aspect-square rounded-lg overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
                <img className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8F3E9Kj7S3p4Z8N0L2K5X8Q7W6E5R4T3Y2U1I0O9P8A7S6D5F4G3H2J1K0L" alt="Ikebukuro Nami Interior" />
              </div>
              <div className="absolute -bottom-8 -left-8 md:-left-16 z-30 vertical-text bg-primary/90 text-on-primary px-4 py-8 font-headline font-bold tracking-widest text-xl md:text-2xl">
                伝統と革新の調和
              </div>
            </div>
          </div>
        </div>
      </section>
    </WashiLayout>
  );
}
