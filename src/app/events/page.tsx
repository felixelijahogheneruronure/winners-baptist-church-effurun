import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// TODO: Replace with dynamic data fetching from Firestore
const events = [
  {
    id: 1,
    title: 'Community Outreach Day',
    date: '2024-08-10',
    time: '10:00 AM - 2:00 PM',
    location: 'Effurun Market Square',
    imageUrl: 'https://picsum.photos/400/250?random=40',
    description: 'Join us as we serve our local community, offering support and sharing God\'s love.',
  },
  {
    id: 2,
    title: 'Youth Summer Camp',
    date: '2024-08-15',
    time: 'All Day (Multi-day event)',
    location: 'Camp Victory Grounds',
    imageUrl: 'https://picsum.photos/400/250?random=41',
    description: 'An exciting week of fun, fellowship, and spiritual growth for teenagers.',
  },
  {
    id: 3,
    title: 'Marriage Enrichment Seminar',
    date: '2024-09-07',
    time: '9:00 AM - 4:00 PM',
    location: 'Church Fellowship Hall',
    imageUrl: 'https://picsum.photos/400/250?random=42',
    description: 'Invest in your marriage with practical insights and biblical wisdom.',
  },
  {
    id: 4, // Added another event
    title: 'Sunday School Teachers Workshop',
    date: '2024-09-21',
    time: '10:00 AM - 12:00 PM',
    location: 'Church Library',
    imageUrl: 'https://picsum.photos/400/250?random=43',
    description: 'Equipping our dedicated teachers with new tools and inspiration for children\'s ministry.',
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
         {/* Optional: Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Upcoming Events</h1>
          <p className="mt-4 text-lg md:text-xl">Stay connected and join us for fellowship and growth.</p>
        </div>
      </section>

      {/* Event List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl container-padding">
           {/* TODO: Add filtering/calendar view options here */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
            {events.map((event) => (
              <Card key={event.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                 <div className="relative h-52 w-full"> {/* Slightly increased height */}
                   <Image
                     src={event.imageUrl}
                     alt={event.title}
                     layout="fill"
                     objectFit="cover"
                     className="group-hover:scale-105 transition-transform duration-300"
                     data-ai-hint="community event gathering people"
                   />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                 </div>
                <CardHeader className="pb-4"> {/* Reduced padding bottom */}
                  <CardTitle className="h3-typography mb-2">{event.title}</CardTitle>
                   <div className="text-sm text-muted-foreground flex flex-col gap-1.5 mt-1"> {/* Increased gap */}
                     <span className="flex items-center gap-2"> {/* Increased gap */}
                       <Calendar className="h-4 w-4 flex-shrink-0" /> {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                     </span>
                     <span className="flex items-center gap-2"> {/* Increased gap */}
                       <Clock className="h-4 w-4 flex-shrink-0" /> {event.time}
                     </span>
                     <span className="flex items-center gap-2"> {/* Increased gap */}
                       <MapPin className="h-4 w-4 flex-shrink-0" /> {event.location}
                     </span>
                   </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0"> {/* Removed top padding */}
                  <CardDescription>{event.description}</CardDescription>
                </CardContent>
                <CardFooter className="bg-secondary p-4 mt-auto border-t"> {/* Added margin-top auto and border */}
                  {/* Add registration link or more info button if needed */}
                  <Button variant="link" size="sm" className="px-0 text-primary font-medium" asChild>
                     <Link href="#">Learn More <span aria-hidden="true">&rarr;</span></Link> {/* Replace # with actual link */}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Message for no events or link to past events */}
           {events.length === 0 && (
             <div className="text-center py-16 text-muted-foreground">
               <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
               <p className="text-lg">No upcoming events scheduled at this time.</p>
               <p>Check back soon!</p>
               {/* Optional: <Link href="/past-events" className="text-primary hover:underline mt-4 inline-block">View Past Events</Link> */}
             </div>
           )}

           {/* TODO: Add Pagination if needed */}
        </div>
      </section>
    </div>
  );
}
