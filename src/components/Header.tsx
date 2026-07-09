import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  SheetOverlay,
  SheetContent,
} from '@/components/ui/sheet';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Work' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8 h-12 flex items-center justify-between">
        <Link to="/" className="text-sm font-semibold text-foreground no-underline tracking-tight">
          Hanif Zufar Rafif
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  className={navigationMenuTriggerStyle()}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </div>

      {open && (
        <>
          <SheetOverlay className="md:hidden" onClick={() => setOpen(false)} />
          <SheetContent className="md:hidden inset-0 top-12 max-w-none border-l-0 bg-white/95 backdrop-blur-2xl p-0 flex flex-col items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xl text-foreground no-underline"
              >
                {link.label}
              </a>
            ))}
          </SheetContent>
        </>
      )}
    </header>
  );
}
