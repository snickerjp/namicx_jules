export default function Footer() {
  return (
    <footer className="bg-[#061426] w-full py-16 border-t border-[#1e2a3d]/15">
      <div className="flex flex-col items-center gap-8 px-4 w-full text-center">
        <div className="font-headline text-[#d6e3fd] text-2xl tracking-widest">Ikebukuro Nami</div>
        <div className="flex flex-wrap justify-center gap-8 font-body text-sm tracking-wide">
          <a className="text-[#d6e3fd]/40 hover:text-[#d6e3fd] transition-colors" href="#">Privacy Policy</a>
          <a className="text-[#d6e3fd]/40 hover:text-[#d6e3fd] transition-colors" href="#">Contact</a>
          <a className="text-[#d6e3fd]/40 hover:text-[#d6e3fd] transition-colors" href="#">Press</a>
          <a className="text-[#d6e3fd]/40 hover:text-[#d6e3fd] transition-colors" href="#">Careers</a>
        </div>
        <p className="text-[#d6e3fd]/40 font-body text-xs">© 2024 Ikebukuro Nami. The Nocturnal Artisan.</p>
      </div>
    </footer>
  );
}
