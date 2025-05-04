import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Banknote, Building2, Hash } from 'lucide-react'; // Added more specific icons
import ContactForm from '@/components/contact/contact-form';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden"> {/* Increased padding */}
         {/* Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl">We'd love to hear from you. Get in touch or plan your visit.</p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-5 gap-16 container-padding"> {/* Increased gap */}
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-10"> {/* Increased spacing */}
            <div> {/* Grouping Get in Touch */}
                <h2 className="h2-typography mb-6 border-b pb-4">Get in Touch</h2> {/* Adjusted heading style */}
                <div className="space-y-6"> {/* Spacing within the group */}
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Address</h3>
                            <p className="text-muted-foreground">123 Church Street, Effurun, Delta State, Nigeria</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Phone</h3>
                            <a href="tel:+2348012345678" className="text-muted-foreground hover:text-primary transition-colors">+234 801 234 5678</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Email</h3>
                            <a href="mailto:info@winnersbaptisteffurun.org" className="text-muted-foreground hover:text-primary transition-colors">info@winnersbaptisteffurun.org</a>
                        </div>
                    </div>
                </div>
            </div>

             {/* Donation Details */}
             <div className="pt-10 border-t"> {/* Adjusted padding */}
                <h2 className="h2-typography mb-6 border-b pb-4">Support Our Ministry</h2> {/* Adjusted heading style */}
                 <div className="space-y-6"> {/* Spacing within the group */}
                    <div className="flex items-start gap-4">
                        <Banknote className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Account Name</h3>
                            <p className="text-muted-foreground">Winners Baptist Church Effurun</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Building2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Bank</h3>
                            <p className="text-muted-foreground">Example Bank PLC</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Hash className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Account Number</h3>
                            <p className="text-muted-foreground">1234567890</p>
                        </div>
                    </div>
                     <p className="text-sm text-muted-foreground pt-4"> {/* Adjusted padding */}
                        Alternatively, you can use online payment platforms if available.
                        {/* Add Paystack/Flutterwave button/link here if applicable */}
                    </p>
                 </div>
             </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 relative h-[550px] w-full overflow-hidden rounded-lg shadow-xl border"> {/* Increased height and shadow */}
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
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-3xl container-padding">
          <Card className="shadow-xl border border-border/50 bg-card"> {/* Explicit background */}
            <CardHeader className="text-center pt-8 pb-6"> {/* Adjusted padding */}
              <CardTitle className="h2-typography">Send Us a Message</CardTitle> {/* Adjusted style */}
            </CardHeader>
            <CardContent className="p-6 md:p-10"> {/* Increased padding */}
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
