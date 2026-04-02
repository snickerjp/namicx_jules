import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-deep-navy/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif text-accent tracking-widest">
          池袋 なみ
        </Link>
        <div className="flex space-x-8 text-sm tracking-widest uppercase text-blue-grey">
          <Link href="/story" className="hover:text-accent transition-colors">Concept</Link>
          <Link href="/menu" className="hover:text-accent transition-colors">Menu</Link>
          <Link href="/gallery" className="hover:text-accent transition-colors">Collection</Link>
          <Link href="/access" className="hover:text-accent transition-colors border-l border-white/20 pl-8">Access</Link>
        </div>
      </div>
    </nav>
  );
}
