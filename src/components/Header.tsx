import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b border-primary-100 dark:border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <Link to="/" className="text-2xl font-bold text-primary-900 dark:text-white">
          Mamunur Siddique
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/blog" className="text-primary-700 hover:text-primary-900 dark:text-gray-300 dark:hover:text-white">
            Blog
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}