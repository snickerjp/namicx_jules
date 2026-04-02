import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#061426]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-headline text-[#fdb96a] tracking-widest">
          Ikebukuro Nami
        </div>
        <div className="hidden md:flex items-center gap-10 font-headline tracking-tight">
          <Link className="text-[#d6e3fd]/70 hover:text-[#d6e3fd] transition-colors" href="/menu">Menu</Link>
          <Link className="text-[#d6e3fd]/70 hover:text-[#d6e3fd] transition-colors" href="/story">Heritage</Link>
          <Link className="text-[#fdb96a] border-b border-[#fdb96a]/30 pb-1" href="/reservations">Reservations</Link>
          <Link className="text-[#d6e3fd]/70 hover:text-[#d6e3fd] transition-colors" href="/access">Access</Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden lg:block text-[#fdb96a] px-6 py-2 border border-[#fdb96a]/30 hover:bg-[#fdb96a]/10 transition-all duration-300 font-label tracking-wide">
            Book a Table
          </button>
          <button className="md:hidden text-[#fdb96a]">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#132033]/50"></div>
    </nav>
  );
}
