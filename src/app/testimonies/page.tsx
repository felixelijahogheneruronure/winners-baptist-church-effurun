import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquareQuote, User, Edit, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const testimonies = [
  {
    id: 1,
    name: 'Sister Grace E.',
    date: '2024-07-15',
    imageUrl: 'https://picsum.photos/100/100?random=60',
    title: 'Complete Healing from Chronic Illness',
    story: 'For years, I suffered from debilitating migraines that impacted every area of my life. Through consistent prayer meetings, personal faith, and the unwavering spiritual support of this church family, God has completely healed me. I haven\'t had a migraine in over six months! All glory to His mighty name!',
  },
  {
    id: 2,
    name: 'Brother David O.',
    date: '2024-06-28',
    imageUrl: null,
    title: 'Finding Purpose, Community, and Belonging',
    story: 'I felt lost and adrift before finding Winners Baptist Church. Here, I discovered not just a place of worship, but a true spiritual family. Through the messages and small groups, I\'ve grown immensely in my faith, uncovered my spiritual gifts, and now find great joy and fulfillment serving in the youth ministry. I finally feel like I belong.',
  },
  {
    id: 3,
    name: 'Anonymous',
    date: '2024-05-10',
    imageUrl: null,
    title: 'Miraculous Financial Breakthrough During Difficult Times',
    story: 'After prayerfully committing to faithfully tithing despite facing significant financial struggles and job uncertainty, God opened doors I never could have imagined. I received an unexpected job promotion with a salary increase and a bonus that miraculously cleared all my outstanding debts. God\'s faithfulness and provision are truly undeniable!',
  },
   {
    id: 4,
    name: 'The Adebayo Family',
    date: '2024-04-20',
    imageUrl: 'https://picsum.photos/100/100?random=61',
    title: 'Restoration and Healing in Our Marriage',
    story: 'Our marriage was on the brink of collapse due to poor communication and unresolved conflicts. Through the marriage enrichment seminar hosted by the church and dedicated pastoral counseling, God brought profound healing and reconciliation. We are learning to communicate with love and respect, putting Christ back at the center of our relationship. We are so grateful for this church\'s investment in families.',
   },
];

export default function TestimoniesPage() {
  return (
    <div className="flex flex-col animate-fade-in">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden animate-fade-in-up">
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Testimonies</h1>
          <p className="mt-4 text-lg md:text-xl">Read inspiring stories of God's faithfulness, healing, and transformation in the lives of our members.</p>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="section-padding bg-background animate-fade-in-up animation-delay-200">
        <div className="container mx-auto max-w-4xl container-padding space-y-12">

          {/* Share Testimony CTA */}
          <Card className="bg-secondary border border-border/50 shadow-md overflow-hidden animate-fade-in-up">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h2 className="h3-typography mb-2">Share Your Story</h2>
                    <p className="text-muted-foreground text-base">Has God worked wonders in your life? Your testimony can inspire faith and encourage others. Click here to share how God has blessed you.</p>
                </div>
                <Button size="lg" asChild className="shadow hover:shadow-md transition-shadow flex-shrink-0 w-full md:w-auto hover:scale-105">
                    <Link href="#">
                        <Edit className="mr-2 h-5 w-5" /> Share Your Testimony <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                </Button>
            </CardContent>
          </Card>

          {/* Testimonies List */}
          {testimonies.map((testimony, index) => (
            <Card key={testimony.id} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-border/60 bg-card hover:scale-105 animate-fade-in-up animation-delay-${index * 200 + 200}`}>
               <CardHeader className="bg-muted/50 p-5 md:p-6 border-b">
                 <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {testimony.imageUrl ? (
                         <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/30 shadow-sm">
                            <Image
                                src={testimony.imageUrl}
                                alt={testimony.name}
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="person portrait testimony"
                            />
                         </div>
                    ) : (
                         <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted text-muted-foreground flex-shrink-0 border-2 border-primary/30 shadow-sm">
                            <User className="h-10 w-10" />
                         </div>
                    )}
                    <div className="flex-grow mt-2 sm:mt-0">
                        <CardTitle className="h3-typography mb-1 leading-tight">{testimony.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                            <span className="font-medium">{testimony.name}</span> | {new Date(testimony.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                 </div>
               </CardHeader>
              <CardContent className="p-6 md:p-8">
                <blockquote className="relative border-l-4 border-primary pl-6 py-3 italic text-foreground text-lg leading-relaxed">
                   <MessageSquareQuote className="absolute -left-3.5 -top-0 h-7 w-7 text-primary opacity-60" />
                   {testimony.story}
                </blockquote>
              </CardContent>
            </Card>
          ))}

           {testimonies.length === 0 && (
             <div className="text-center py-20 text-muted-foreground border border-dashed border-border/70 rounded-lg bg-secondary mt-10 animate-fade-in-up">
                 <MessageSquareQuote className="h-14 w-14 mx-auto mb-5 text-primary" />
                 <p className="text-xl font-medium mb-2">No Testimonies Shared Yet</p>
                 <p>Be the first to encourage others by sharing how God has worked in your life!</p>
             </div>
           )}
        </div>
      </section>
    </div>
  );
}
