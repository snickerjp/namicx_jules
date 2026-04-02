export default function Footer() {
  return (
    <footer className="bg-deep-navy border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-blue-grey text-xs tracking-widest uppercase">
        <div className="mb-6 md:mb-0">
          © 2024 Ikebukuro Nami. All Rights Reserved.
        </div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors text-accent border border-accent/20 px-4 py-2 -my-2 rounded-sm">Reservations</a>
        </div>
      </div>
    </footer>
  );
}
