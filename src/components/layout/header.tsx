import Link from 'next/link';
import { Church, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetClose, SheetTrigger } from '@/components/ui/sheet'; // Added SheetClose

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/donate', label: 'Donate' },
  { href: '/testimonies', label: 'Testimonies' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"> {/* Added shadow-sm */}
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between container-padding">
        <Link href="/" className="flex items-center gap-2 group">
          <Church className="h-6 w-6 text-primary group-hover:animate-pulse" /> {/* Added hover effect */}
          <span className="font-bold text-lg hidden sm:inline-block">Winners Baptist Church</span>
           <span className="font-bold text-base sm:hidden">WBC Effurun</span> {/* Shorter name for mobile */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/70 transition-colors hover:text-primary px-2 py-1 rounded-md hover:bg-primary/10" // Adjusted hover effect
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6 flex flex-col"> {/* Ensure flex column */}
               <div className="mb-6 flex items-center gap-2 border-b pb-4">
                    <Church className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">Winners Baptist</span>
               </div>
              <nav className="flex flex-col space-y-2 flex-grow"> {/* Use space-y-2 for less spacing */}
                {navLinks.map((link) => (
                   <SheetClose asChild key={link.href}> {/* Wrap Link in SheetClose */}
                      <Link
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary py-2 px-3 rounded-md hover:bg-secondary"
                      >
                        {link.label}
                      </Link>
                   </SheetClose>
                ))}
              </nav>
               <div className="mt-auto pt-4 border-t text-center text-xs text-muted-foreground">
                 © {new Date().getFullYear()} WBC Effurun
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
