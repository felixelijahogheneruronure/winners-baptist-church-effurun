import Link from 'next/link';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react'; // Added Instagram

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 mt-auto border-t-2 border-border"> {/* Added border-t */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 container-padding"> {/* Changed to 4 cols on lg */}
        <div className="lg:col-span-2"> {/* Make first column wider */}
          <h3 className="text-lg font-semibold mb-3">Winners Baptist Church Effurun</h3>
          <p className="text-sm text-muted-foreground max-w-md"> {/* Added max-width */}
            A vibrant community growing in faith, united in love, and dedicated to serving Christ in Effurun and beyond. Join us!
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-base">Quick Links</h4> {/* Increased font size */}
          <ul className="space-y-2 text-sm"> {/* Increased spacing */}
            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/sermons" className="text-muted-foreground hover:text-primary transition-colors">Sermons</Link></li>
            <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-base">Connect With Us</h4> {/* Increased font size */}
          <div className="flex space-x-5"> {/* Increased spacing */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" /> {/* Added Instagram */}
            </a>
          </div>
            <div className="mt-4 text-sm text-muted-foreground">
                <p><span className="font-medium">Address:</span> 123 Church St, Effurun</p>
                <p><span className="font-medium">Phone:</span> +234 801 234 5678</p>
            </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl mt-10 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground container-padding"> {/* Adjusted mt and pt */}
        © {new Date().getFullYear()} Winners Baptist Church Effurun. All rights reserved. | <Link href="/admin" className="hover:text-primary">Admin</Link>
      </div>
    </footer>
  );
}
