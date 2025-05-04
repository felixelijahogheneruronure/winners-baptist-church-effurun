import Link from 'next/link';
import { Church, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetClose, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'; // Added SheetHeader, SheetTitle

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"> {/* Added shadow-sm, adjusted border */}
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between container-padding">
        <Link href="/" className="flex items-center gap-2 group mr-6"> {/* Added margin-right */}
          <Church className="h-7 w-7 text-primary group-hover:text-primary/80 transition-colors" /> {/* Slightly larger icon, refined hover */}
          <span className="font-bold text-lg hidden sm:inline-block whitespace-nowrap">Winners Baptist Church</span>
           <span className="font-bold text-base sm:hidden whitespace-nowrap">WBC Effurun</span> {/* Shorter name for mobile */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium flex-grow justify-end"> {/* Use flex-grow and justify-end */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-primary px-3 py-2 rounded-md hover:bg-primary/10 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/4" // Underline hover effect
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
            <SheetContent side="right" className="w-full max-w-xs bg-background p-0 flex flex-col shadow-xl"> {/* Removed padding, added shadow */}
               <SheetHeader className="p-6 border-b">
                 <SheetTitle className="flex items-center gap-2">
                    <Church className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">Winners Baptist</span>
                  </SheetTitle>
               </SheetHeader>
              <nav className="flex flex-col space-y-1 p-4 flex-grow overflow-y-auto"> {/* Added padding, scroll */}
                {navLinks.map((link) => (
                   <SheetClose asChild key={link.href}> {/* Wrap Link in SheetClose */}
                      <Link
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary py-2.5 px-4 rounded-md hover:bg-secondary" // Adjusted padding/spacing
                      >
                        {link.label}
                      </Link>
                   </SheetClose>
                ))}
              </nav>
               <div className="mt-auto p-4 border-t text-center text-xs text-muted-foreground bg-secondary"> {/* Footer bg */}
                 © {new Date().getFullYear()} Winners Baptist Church Effurun
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
