import Link from 'next/link';
import { Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-auto">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 container-padding">
        <div>
          <h3 className="text-lg font-semibold mb-2">Winners Baptist Church Effurun</h3>
          <p className="text-sm text-muted-foreground">
            Growing in faith, serving with love.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/sermons" className="hover:text-primary">Sermons</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground container-padding">
        © {new Date().getFullYear()} Winners Baptist Church Effurun. All rights reserved.
      </div>
    </footer>
  );
}
