import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquareQuote, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image

// TODO: Replace with dynamic data fetching from Firestore (User Generated Content or Admin Uploaded)
const testimonies = [
  {
    id: 1,
    name: 'Sister Grace E.',
    date: '2024-07-15',
    imageUrl: 'https://picsum.photos/100/100?random=60', // Optional image
    title: 'Healed from Chronic Illness',
    story: 'For years, I suffered from debilitating migraines. Through prayer and the support of this church family, God has completely healed me. I haven\'t had a migraine in six months! Praise His name!',
  },
  {
    id: 2,
    name: 'Brother David O.',
    date: '2024-06-28',
    imageUrl: null, // Example without image
    title: 'Found Purpose and Community',
    story: 'I felt lost and alone before joining Winners Baptist Church. Here, I found not just a church, but a family. I\'ve grown in my faith, discovered my spiritual gifts, and now serve joyfully in the youth ministry.',
  },
  {
    id: 3,
    name: 'Anonymous', // Allow anonymous testimonies
    date: '2024-05-10',
    imageUrl: null,
    title: 'Financial Breakthrough',
    story: 'After faithfully tithing despite financial struggles, God opened doors I never expected. I received an unexpected job promotion and bonus that cleared all my debts. God is faithful!',
  },
];

export default function TestimoniesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto max-w-4xl text-center container-padding">
          <h1 className="h1-typography">Testimonies</h1>
          <p className="mt-4 text-lg md:text-xl">Read stories of God's faithfulness in the lives of our members.</p>
        </div>
      </section>

      {/* Testimonies List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl container-padding space-y-8">

          <div className="text-center mb-12">
             <Button size="lg" asChild>
                 {/* TODO: Link to a submission form page or modal */}
                 <Link href="#">Share Your Testimony</Link>
             </Button>
             <p className="text-sm text-muted-foreground mt-3">Has God done something amazing in your life? Share it to encourage others!</p>
          </div>


          {testimonies.map((testimony) => (
            <Card key={testimony.id} className="shadow-md overflow-hidden">
               <CardHeader className="bg-secondary p-6">
                 <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {testimony.imageUrl ? (
                         <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={testimony.imageUrl}
                                alt={testimony.name}
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="person portrait"
                            />
                         </div>
                    ) : (
                         <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground flex-shrink-0">
                            <User className="h-8 w-8" />
                         </div>
                    )}
                    <div className="flex-grow">
                        <CardTitle className="h3-typography">{testimony.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                            Shared by {testimony.name} on {new Date(testimony.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                 </div>
               </CardHeader>
              <CardContent className="p-6">
                <blockquote className="relative border-l-4 border-primary pl-6 italic text-muted-foreground">
                   <MessageSquareQuote className="absolute -left-3 top-0 h-5 w-5 text-primary opacity-50" />
                   {testimony.story}
                </blockquote>
              </CardContent>
              {/* Optional Footer for actions like 'Read More' if stories are truncated */}
              {/* <CardFooter> ... </CardFooter> */}
            </Card>
          ))}

           {/* Message for no testimonies */}
           {testimonies.length === 0 && (
             <div className="text-center py-12 text-muted-foreground">
               <p>No testimonies have been shared yet. Be the first!</p>
             </div>
           )}

          {/* TODO: Add Pagination if needed */}
        </div>
      </section>
    </div>
  );
}
