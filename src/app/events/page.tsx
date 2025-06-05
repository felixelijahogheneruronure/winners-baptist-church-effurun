import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'Community Outreach Day',
    date: '2024-08-10',
    time: '10:00 AM - 2:00 PM',
    location: 'Effurun Market Square',
    imageUrl: 'https://picsum.photos/400/250?random=40',
    description: 'Join us as we serve our local community, offering support and sharing God\'s love through practical help and fellowship.',
  },
  {
    id: 2,
    title: 'Youth Summer Camp \'Ignite\'',
    date: '2024-08-15',
    time: 'Aug 15-18 (Multi-day)',
    location: 'Camp Victory Grounds',
    imageUrl: 'https://picsum.photos/400/250?random=41',
    description: 'An exciting week of dynamic worship, engaging activities, challenging messages, and spiritual growth for teenagers (Ages 13-18).',
  },
  {
    id: 3,
    title: 'Marriage Enrichment Seminar: Built to Last',
    date: '2024-09-07',
    time: '9:00 AM - 4:00 PM',
    location: 'Church Fellowship Hall',
    imageUrl: 'https://picsum.photos/400/250?random=42',
    description: 'Invest in your marriage with practical workshops, insightful sessions, and biblical wisdom for a stronger relationship.',
  },
  {
    id: 4,
    title: 'Sunday School Teachers Workshop',
    date: '2024-09-21',
    time: '10:00 AM - 12:30 PM',
    location: 'Church Library & Resource Center',
    imageUrl: 'https://picsum.photos/400/250?random=43',
    description: 'Equipping our dedicated Sunday School teachers with creative methods, fresh inspiration, and valuable resources for children\'s ministry.',
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col animate-fade-in">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden animate-fade-in-up">
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Upcoming Events</h1>
          <p className="mt-4 text-lg md:text-xl">Stay connected and join us for fellowship, growth, and service.</p>
        </div>
      </section>

      {/* Event List */}
      <section className="section-padding bg-background animate-fade-in-up animation-delay-200">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event, index) => (
              <Card key={event.id} className={`flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group border border-border/50 hover:scale-105 animate-fade-in-up animation-delay-${(index % 3) * 200}`}>
                 <div className="relative h-56 w-full">
                   <Image
                     src={event.imageUrl}
                     alt={event.title}
                     layout="fill"
                     objectFit="cover"
                     className="group-hover:scale-105 transition-transform duration-300"
                     data-ai-hint="community event gathering people"
                   />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                 </div>
                <CardHeader className="pb-3 pt-5 px-5">
                  <CardTitle className="h3-typography mb-3 leading-tight">{event.title}</CardTitle>
                   <div className="text-sm text-muted-foreground flex flex-col gap-2 mt-1">
                     <span className="flex items-center gap-2.5">
                       <Calendar className="h-4 w-4 flex-shrink-0 text-primary" />
                       {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                     </span>
                     <span className="flex items-center gap-2.5">
                       <Clock className="h-4 w-4 flex-shrink-0 text-primary" />
                       {event.time}
                     </span>
                     <span className="flex items-center gap-2.5">
                       <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                       {event.location}
                     </span>
                   </div>
                </CardHeader>
                <CardContent className="flex-grow pt-2 px-5 pb-5">
                  <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
                </CardContent>
                <CardFooter className="bg-secondary p-4 mt-auto border-t">
                  <Button variant="default" size="sm" asChild className="shadow hover:shadow-md transition-shadow">
                     <Link href="#">Learn More <span aria-hidden="true" className="ml-1">&rarr;</span></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

           {events.length === 0 && (
             <div className="text-center py-20 text-muted-foreground border border-dashed border-border/70 rounded-lg bg-secondary mt-10 animate-fade-in-up">
               <Calendar className="h-14 w-14 mx-auto mb-5 text-primary" />
               <p className="text-xl font-medium mb-2">No upcoming events scheduled.</p>
               <p>Please check back soon for updates or contact the church office for more information.</p>
             </div>
           )}
        </div>
      </section>
    </div>
  );
}
