import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquareQuote, User, Edit } from 'lucide-react'; // Added Edit icon
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
    story: 'For years, I suffered from debilitating migraines. Through consistent prayer and the unwavering support of this church family, God has completely healed me. I haven\'t had a migraine in over six months! All glory to His name!',
  },
  {
    id: 2,
    name: 'Brother David O.',
    date: '2024-06-28',
    imageUrl: null, // Example without image
    title: 'Found Purpose and Community',
    story: 'I felt lost and adrift before finding Winners Baptist Church. Here, I discovered not just a place of worship, but a true family. I\'ve grown immensely in my faith, uncovered my spiritual gifts, and now find great joy serving in the youth ministry.',
  },
  {
    id: 3,
    name: 'Anonymous', // Allow anonymous testimonies
    date: '2024-05-10',
    imageUrl: null,
    title: 'Financial Breakthrough During Tough Times',
    story: 'After committing to faithfully tithing despite facing significant financial struggles, God opened doors I never could have imagined. I received an unexpected job promotion and a bonus that miraculously cleared all my debts. God\'s faithfulness is undeniable!',
  },
   { // Added another testimony
    id: 4,
    name: 'Family A.',
    date: '2024-04-20',
    imageUrl: 'https://picsum.photos/100/100?random=61',
    title: 'Restoration in Marriage',
    story: 'Our marriage was on the brink of collapse, but through the marriage enrichment seminar and pastoral counseling offered here, God brought healing and reconciliation. We are learning to communicate better and put Christ at the center. We are so grateful.',
   },
];

export default function TestimoniesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
         {/* Optional: Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmZiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Testimonies</h1>
          <p className="mt-4 text-lg md:text-xl">Read stories of God's faithfulness in the lives of our members.</p>
        </div>
      </section>

      {/* Testimonies List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl container-padding space-y-10"> {/* Increased spacing */}

          <div className="text-center mb-14 p-6 bg-secondary rounded-lg shadow-sm border border-border/50">
             <Button size="lg" asChild className="shadow hover:shadow-md transition-shadow">
                 {/* TODO: Link to a submission form page or modal */}
                 <Link href="#">
                    <Edit className="mr-2 h-5 w-5" /> Share Your Testimony
                 </Link>
             </Button>
             <p className="text-base text-muted-foreground mt-4">Has God done something amazing in your life? Share it to encourage others!</p>
          </div>


          {testimonies.map((testimony) => (
            <Card key={testimony.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-border/50"> {/* Added border */}
               <CardHeader className="bg-secondary p-6 border-b"> {/* Added border-b */}
                 <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {testimony.imageUrl ? (
                         <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20 shadow-sm"> {/* Increased size & added border */}
                            <Image
                                src={testimony.imageUrl}
                                alt={testimony.name}
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="person portrait"
                            />
                         </div>
                    ) : (
                         <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted text-muted-foreground flex-shrink-0 border-2 border-primary/20 shadow-sm"> {/* Increased size & added border */}
                            <User className="h-10 w-10" /> {/* Increased icon size */}
                         </div>
                    )}
                    <div className="flex-grow mt-2 sm:mt-0">
                        <CardTitle className="h3-typography mb-1">{testimony.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Shared by {testimony.name} on {new Date(testimony.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                 </div>
               </CardHeader>
              <CardContent className="p-6 md:p-8"> {/* Increased padding */}
                <blockquote className="relative border-l-4 border-primary pl-6 py-2 italic text-muted-foreground text-base leading-relaxed"> {/* Adjusted styling */}
                   <MessageSquareQuote className="absolute -left-3 -top-1 h-6 w-6 text-primary opacity-50" /> {/* Adjusted icon position */}
                   {testimony.story}
                </blockquote>
              </CardContent>
              {/* Optional Footer for actions like 'Read More' if stories are truncated */}
              {/* <CardFooter className="p-4 bg-secondary border-t"> ... </CardFooter> */}
            </Card>
          ))}

           {/* Message for no testimonies */}
           {testimonies.length === 0 && (
             <div className="text-center py-16 text-muted-foreground">
                 <MessageSquareQuote className="h-12 w-12 mx-auto mb-4 text-primary" />
                 <p className="text-lg">No testimonies have been shared yet.</p>
                 <p>Be the first to share how God has worked in your life!</p>
             </div>
           )}

          {/* TODO: Add Pagination if needed */}
        </div>
      </section>
    </div>
  );
}
