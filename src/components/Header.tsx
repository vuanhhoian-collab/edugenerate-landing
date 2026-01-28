import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">EduGenerate</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition">How it Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition">Contact</a>
            <button className="text-emerald-600 hover:text-emerald-700 font-medium">Sign In</button>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-medium">
              Get Started Free
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-emerald-600 py-2">Features</a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-emerald-600 py-2">How it Works</a>
            <a href="#pricing" className="block text-gray-700 hover:text-emerald-600 py-2">Pricing</a>
            <a href="#contact" className="block text-gray-700 hover:text-emerald-600 py-2">Contact</a>
            <button className="w-full text-left text-emerald-600 py-2 font-medium">Sign In</button>
            <button className="w-full bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-medium">
              Get Started Free
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
