export default function Footer() {
  return (
    <footer className="border-t border-primary-100 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-primary-600 dark:text-gray-400">
          © {new Date().getFullYear()} Mamunur Siddique. All rights reserved.
        </p>
      </div>
    </footer>
  );
}