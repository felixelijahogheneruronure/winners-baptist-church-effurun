import Link from 'next/link';
import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone } from 'lucide-react'; // Added MapPin, Phone

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-auto border-t-2 border-border"> {/* Adjusted padding */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container-padding">
        {/* About Section */}
        <div className="lg:col-span-2 pr-4"> {/* Added padding-right */}
          <h3 className="text-lg font-semibold mb-4 text-foreground">Winners Baptist Church Effurun</h3> {/* Darker text */}
          <p className="text-sm text-muted-foreground leading-relaxed"> {/* Adjusted leading */}
            A vibrant community growing in faith, united in love, and dedicated to serving Christ in Effurun and beyond. We invite you to join us for worship and fellowship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-base text-foreground">Quick Links</h4> {/* Darker text */}
          <ul className="space-y-2.5 text-sm"> {/* Increased spacing */}
            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services & Ministries</Link></li>
            <li><Link href="/sermons" className="text-muted-foreground hover:text-primary transition-colors">Sermons</Link></li>
            <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
             <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
             <li><Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
          </ul>
        </div>

        {/* Connect & Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-base text-foreground">Connect & Contact</h4> {/* Darker text */}
           {/* Address & Phone */}
           <div className="space-y-3 mb-5 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>123 Church Street, Effurun, Delta State</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                    <a href="tel:+2348012345678" className="hover:text-primary transition-colors">+234 801 234 5678</a>
                </div>
            </div>
            {/* Social Media */}
          <div className="flex space-x-4"> {/* Adjusted spacing */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10"> {/* Added padding and hover bg */}
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="container mx-auto max-w-7xl mt-10 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground container-padding"> {/* Adjusted mt and pt, smaller text */}
        © {new Date().getFullYear()} Winners Baptist Church Effurun. All Rights Reserved. | <Link href="/admin" className="hover:text-primary transition-colors">Admin Login</Link>
         {/* Optional: Add privacy policy link */}
         {/* | <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link> */}
      </div>
    </footer>
  );
}
