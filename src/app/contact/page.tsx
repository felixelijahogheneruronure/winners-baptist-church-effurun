import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Banknote } from 'lucide-react';
import ContactForm from '@/components/contact/contact-form';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto max-w-4xl text-center container-padding">
          <h1 className="h1-typography">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl">We'd love to hear from you. Get in touch or plan your visit.</p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 container-padding">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="h2-typography mb-6">Get in Touch</h2>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">123 Church Street, Effurun, Delta State, Nigeria</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+2348012345678" className="text-muted-foreground hover:text-primary">+234 801 234 5678</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:info@winnersbaptisteffurun.org" className="text-muted-foreground hover:text-primary">info@winnersbaptisteffurun.org</a>
              </div>
            </div>

             {/* Donation Details */}
             <div className="pt-6 border-t">
                <h2 className="h2-typography mb-6">Support Our Ministry</h2>
                 <div className="flex items-start gap-4">
                    <Banknote className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Bank Details</h3>
                        <p className="text-muted-foreground">
                        Account Name: Winners Baptist Church Effurun<br />
                        Bank: Example Bank PLC<br />
                        Account Number: 1234567890
                        </p>
                         <p className="text-sm text-muted-foreground mt-2">
                            Alternatively, you can use online payment platforms if available.
                            {/* Add Paystack/Flutterwave button/link here if applicable */}
                        </p>
                    </div>
                 </div>
             </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-80 md:h-full w-full overflow-hidden rounded-lg shadow-md">
            {/* Replace with actual map embed (e.g., Google Maps iframe) */}
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.565136878608!2d5.770816614764866!3d5.56566449598438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041adc48b067a8b%3A0x6c6c4f4e0bce9a4!2sEffurun%2C%20Delta!5e0!3m2!1sen!2sng!4v1678886000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location Map"
                className="absolute inset-0"
                ></iframe>
            {/* Fallback Static Image if map fails or for preview */}
            {/* <Image
              src="https://picsum.photos/800/600?random=20"
              alt="Map showing church location"
              layout="fill"
              objectFit="cover"
              data-ai-hint="map location city"
            />
             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <p className="text-white text-lg font-semibold">[Map Placeholder]</p>
             </div> */}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-3xl container-padding">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="h2-typography">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
