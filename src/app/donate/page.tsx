import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Banknote, CreditCard, Heart, Building2, Hash, Gift } from 'lucide-react'; // Added Gift icon
import Link from 'next/link';

// TODO: Update with actual bank details and potentially payment gateway links
const bankDetails = {
  accountName: 'Winners Baptist Church Effurun',
  bankName: 'Example Bank PLC',
  accountNumber: '1234567890',
};

// TODO: Add links to Paystack/Flutterwave if used
const onlinePaymentLink = null; // Example: 'https://paystack.com/pay/yourchurch'

export default function DonatePage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden"> {/* Increased padding */}
         {/* Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Support Our Ministry</h1>
          <p className="mt-4 text-lg md:text-xl">Your generosity helps us spread the Gospel and serve our community.</p>
        </div>
      </section>

      {/* Donation Information */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl container-padding space-y-12"> {/* Increased spacing */}

           <Card className="shadow-lg border-primary border-2 bg-primary/5 overflow-hidden"> {/* Subtle background tint, overflow hidden */}
              <CardHeader className="p-6 md:p-8"> {/* Increased padding */}
                  <div className="flex items-center gap-4 mb-3"> {/* Increased gap */}
                     <Gift className="h-9 w-9 text-primary flex-shrink-0" /> {/* Changed icon to Gift */}
                     <CardTitle className="h2-typography">The Blessing of Giving</CardTitle> {/* Adjusted style */}
                  </div>
              </CardHeader>
              <CardContent className="px-6 md:px-8 pb-6 md:pb-8"> {/* Matched padding */}
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Giving is an act of worship and faith, expressing our gratitude to God for His provisions.
                    Your contributions support our church's operations, ministries, outreach programs, and the
                    maintenance of our facilities. Every gift, no matter the size, makes a difference in advancing
                    God's kingdom through Winners Baptist Church. Thank you for partnering with us in ministry.
                  </p>
              </CardContent>
           </Card>

           <h2 className="h2-typography text-center pt-6">Ways to Give</h2> {/* Centered heading */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Grid layout for payment methods */}
                {/* Bank Transfer Card */}
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                        <Banknote className="h-7 w-7 text-primary flex-shrink-0" /> {/* Increased icon size */}
                        <CardTitle className="h3-typography">Bank Transfer</CardTitle>
                    </div>
                    <CardDescription>Direct deposit using the details below.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5 pt-2 flex-grow"> {/* Increased spacing, flex-grow */}
                    <div className="flex items-center gap-3">
                        <Heart className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <div>
                            <span className="font-semibold block text-sm">Account Name:</span>
                            <span className="text-muted-foreground">{bankDetails.accountName}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <div>
                            <span className="font-semibold block text-sm">Bank:</span>
                            <span className="text-muted-foreground">{bankDetails.bankName}</span>
                        </div>
                    </div>
                        <div className="flex items-center gap-3">
                        <Hash className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <div>
                            <span className="font-semibold block text-sm">Account Number:</span>
                            <span className="text-muted-foreground">{bankDetails.accountNumber}</span>
                        </div>
                    </div>
                    </CardContent>
                    <CardFooter className="bg-secondary p-4 mt-auto border-t"> {/* Added footer */}
                         <p className="text-xs text-muted-foreground">Use "Tithe", "Offering", etc. as description.</p>
                    </CardFooter>
                </Card>

                {/* Online Payment Card */}
                {onlinePaymentLink ? (
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <CardHeader className="pb-4">
                        <div className="flex items-center gap-3 mb-2">
                            <CreditCard className="h-7 w-7 text-primary flex-shrink-0" /> {/* Increased icon size */}
                            <CardTitle className="h3-typography">Online Payment</CardTitle>
                        </div>
                        <CardDescription>Use our secure online payment gateway.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-center items-center text-center"> {/* Center content */}
                        <Button size="lg" asChild className="mb-4">
                        <Link href={onlinePaymentLink} target="_blank" rel="noopener noreferrer">
                            Give Online Securely
                        </Link>
                        </Button>
                        <p className="text-xs text-muted-foreground">
                        Powered by [Paystack/Flutterwave/etc.]. Standard fees may apply.
                        </p>
                    </CardContent>
                    </Card>
                ) : (
                     <Card className="shadow-md border-dashed border-border/70 flex flex-col items-center justify-center text-center bg-muted/50"> {/* Placeholder styling */}
                        <CardHeader className="pb-4">
                            <div className="flex items-center justify-center gap-3 mb-2 text-muted-foreground">
                                <CreditCard className="h-7 w-7 flex-shrink-0" />
                                <CardTitle className="h3-typography text-muted-foreground">Online Payment</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Online payment option coming soon!</p>
                            <p className="text-xs mt-2">(Link to Paystack/Flutterwave will appear here)</p>
                        </CardContent>
                    </Card>
                )}
            </div>


           <div className="text-center text-muted-foreground pt-10 border-t"> {/* Increased padding */}
               <p className="text-lg font-medium">Thank you for your faithful support.</p>
               <p className="mt-3">Your giving enables ministry to happen and lives to be changed.</p>
               <p className="mt-4">If you have any questions about giving, please <Link href="/contact" className="text-primary hover:underline font-medium">contact us</Link>.</p>
           </div>
        </div>
      </section>
    </div>
  );
}
