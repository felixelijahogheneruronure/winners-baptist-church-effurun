import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Banknote, CreditCard, Heart } from 'lucide-react';
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
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto max-w-4xl text-center container-padding">
          <h1 className="h1-typography">Support Our Ministry</h1>
          <p className="mt-4 text-lg md:text-xl">Your generosity helps us spread the Gospel and serve our community.</p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl container-padding space-y-10">

           <Card className="shadow-lg border-primary border-2">
              <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                     <Heart className="h-7 w-7 text-primary" />
                     <CardTitle className="h2-typography">Why Give?</CardTitle>
                  </div>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">
                    Giving is an act of worship and faith, expressing our gratitude to God for His provisions.
                    Your contributions support our church's operations, ministries, outreach programs, and the
                    maintenance of our facilities. Every gift, no matter the size, makes a difference in advancing
                    God's kingdom through Winners Baptist Church.
                  </p>
              </CardContent>
           </Card>

          <Card>
            <CardHeader>
               <div className="flex items-center gap-3 mb-2">
                  <Banknote className="h-6 w-6 text-primary" />
                  <CardTitle className="h3-typography">Bank Transfer / Direct Deposit</CardTitle>
               </div>
              <CardDescription>You can give directly via bank transfer using the details below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><span className="font-semibold">Account Name:</span> {bankDetails.accountName}</p>
              <p><span className="font-semibold">Bank:</span> {bankDetails.bankName}</p>
              <p><span className="font-semibold">Account Number:</span> {bankDetails.accountNumber}</p>
              <p className="text-sm text-muted-foreground pt-2">Please use "Tithe", "Offering", or specific ministry name as the transfer description if possible.</p>
            </CardContent>
          </Card>

          {onlinePaymentLink && (
            <Card>
              <CardHeader>
                 <div className="flex items-center gap-3 mb-2">
                    <CreditCard className="h-6 w-6 text-primary" />
                    <CardTitle className="h3-typography">Online Payment</CardTitle>
                 </div>
                <CardDescription>Use our secure online payment gateway for easy giving.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" asChild>
                  <Link href={onlinePaymentLink} target="_blank" rel="noopener noreferrer">
                    Give Online Securely
                  </Link>
                </Button>
                 <p className="text-sm text-muted-foreground mt-3">
                   Powered by [Paystack/Flutterwave/etc.]. Standard transaction fees may apply.
                 </p>
              </CardContent>
            </Card>
          )}

           {/* Placeholder for other methods if needed */}
           {/* <Card>
             <CardHeader>
               <CardTitle className="h3-typography">Other Ways to Give</CardTitle>
               <CardDescription>Information about giving during services or via check.</CardDescription>
             </CardHeader>
             <CardContent>
               <p>You can also give during our Sunday services or mail a check payable to Winners Baptist Church Effurun.</p>
             </CardContent>
           </Card> */}

           <div className="text-center text-muted-foreground pt-6">
               <p>Thank you for your faithful support. Your giving enables ministry to happen.</p>
               <p className="mt-2">If you have any questions about giving, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.</p>
           </div>
        </div>
      </section>
    </div>
  );
}
