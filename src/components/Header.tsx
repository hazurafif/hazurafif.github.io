import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Work' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-hairline/40">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8 h-12 flex items-center justify-between">
        <Link to="/" className="text-sm font-semibold text-ink no-underline tracking-tight">
          Hanif Zufar Rafif
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-ink-muted no-underline hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="flex md:hidden flex-col gap-[5px] bg-none border-none cursor-pointer p-1 z-110"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-[18px] h-[2px] bg-ink rounded-sm"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-[18px] h-[2px] bg-ink rounded-sm"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-[18px] h-[2px] bg-ink rounded-sm"
          />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl text-ink no-underline"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
