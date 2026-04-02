import WashiLayout from '@/components/WashiLayout';

export default function MenuPage() {
  const menuItems = [
    { name: "Sea-Breeze Signature", price: "3,200", desc: "和紙のように薄く削り出された鰹節と、厳選された北海道産ホタテの饗宴。" },
    { name: "The Nocturnal Truffle", price: "4,500", desc: "和牛の旨味と黒トリュフの薫りが鉄板の上で溶け合う、究極の逸品。" },
    { name: "Nami Classic", price: "1,800", desc: "創業時からの伝統を守り続ける、シンプルながら奥深いお好み焼き。" }
  ];

  const drinkItems = [
    { name: "Junmai Daiginjo 'Yume'", price: "1,800 / Glass", desc: "静寂な夜にふさわしい、透明感あふれる希少な銘酒。" },
    { name: "Premium Hawaiian Beer", price: "1,200", desc: "骨董の空間に、一時の爽やかな風を運ぶクラフトビール。" }
  ];

  return (
    <WashiLayout>
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        <header className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif-jp text-accent tracking-tighter">和紙に綴る、鉄板の饗宴</h2>
          <p className="text-blue-grey tracking-widest uppercase text-sm">Experience the Art of Teppan & Craft Spirits</p>
        </header>

        <section className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <h3 className="text-2xl font-serif text-secondary border-b border-white/10 pb-4 tracking-widest uppercase">Main Dishes</h3>
            <div className="space-y-12">
              {menuItems.map((item, idx) => (
                <div key={idx} className="space-y-2 group">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xl font-serif text-washi-white group-hover:text-accent transition-colors">{item.name}</h4>
                    <span className="text-blue-grey text-sm font-sans">¥{item.price}</span>
                  </div>
                  <p className="text-blue-grey/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-2xl font-serif text-secondary border-b border-white/10 pb-4 tracking-widest uppercase">Selections</h3>
            <div className="space-y-12">
              {drinkItems.map((item, idx) => (
                <div key={idx} className="space-y-2 group">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xl font-serif text-washi-white group-hover:text-accent transition-colors">{item.name}</h4>
                    <span className="text-blue-grey text-sm font-sans">¥{item.price}</span>
                  </div>
                  <p className="text-blue-grey/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </WashiLayout>
  );
}
