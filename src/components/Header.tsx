export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-light">⚜ Царь Салтан</div>
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            О квесте
          </a>
          <a
            href="#start"
            className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Начать
          </a>
        </nav>
      </div>
    </header>
  )
}