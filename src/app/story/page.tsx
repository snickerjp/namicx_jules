import WashiLayout from '@/components/WashiLayout';

export default function StoryPage() {
  return (
    <WashiLayout>
      <div className="max-w-7xl mx-auto px-6 space-y-32 py-16">
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-serif-jp text-accent tracking-tighter">
              紙から鉄板へ — <br />
              継承される「粋」の精神
            </h2>
            <div className="space-y-6 text-blue-grey leading-relaxed font-sans text-lg">
              <p>
                池袋の喧騒を抜けた路地裏。かつて「和紙を扱う紙卸」として栄えたこの場所は、今、鉄板の熱気と骨董の静寂が交差する大人の遊び場へと姿を変えました。
              </p>
              <p>
                オーナーの審美眼によって集められた骨董品が、かつての紙卸の記憶を繋ぎ止め、その中にふわりと紛れ込むハワイの風。一見すると相反する要素が、この「なみ」という空間では不思議な調和を奏でています。
              </p>
              <p>
                格式張りすぎず、しかし本質を知る大人が「粋」を感じる場所。
                それが、池袋 なみの願いです。
              </p>
            </div>
          </div>
          <div className="relative h-[600px] w-full bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700 order-1 lg:order-2 shadow-2xl" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000')"}}>
             <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent/5 -z-10 rounded-sm"></div>
             <div className="absolute bottom-8 right-8 text-white/40 text-[10px] tracking-widest uppercase vertical-text">Heritage & Passion</div>
          </div>
        </section>
      </div>
    </WashiLayout>
  );
}
