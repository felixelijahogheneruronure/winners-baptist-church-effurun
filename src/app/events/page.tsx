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
    description: 'Join us as we serve our local community, offering support and sharing God\'s love through practical help and fellowship.',
  },
  {
    id: 2,
    title: 'Youth Summer Camp \'Ignite\'', // Added a theme name
    date: '2024-08-15',
    time: 'Aug 15-18 (Multi-day)', // Clarified date range
    location: 'Camp Victory Grounds',
    imageUrl: 'https://picsum.photos/400/250?random=41',
    description: 'An exciting week of dynamic worship, engaging activities, challenging messages, and spiritual growth for teenagers (Ages 13-18).',
  },
  {
    id: 3,
    title: 'Marriage Enrichment Seminar: Built to Last', // Added subtitle
    date: '2024-09-07',
    time: '9:00 AM - 4:00 PM',
    location: 'Church Fellowship Hall',
    imageUrl: 'https://picsum.photos/400/250?random=42',
    description: 'Invest in your marriage with practical workshops, insightful sessions, and biblical wisdom for a stronger relationship.',
  },
  {
    id: 4, // Added another event
    title: 'Sunday School Teachers Workshop',
    date: '2024-09-21',
    time: '10:00 AM - 12:30 PM', // Adjusted time
    location: 'Church Library & Resource Center', // More specific location
    imageUrl: 'https://picsum.photos/400/250?random=43',
    description: 'Equipping our dedicated Sunday School teachers with creative methods, fresh inspiration, and valuable resources for children\'s ministry.',
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden"> {/* Increased padding */}
         {/* Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Upcoming Events</h1>
          <p className="mt-4 text-lg md:text-xl">Stay connected and join us for fellowship, growth, and service.</p> {/* Updated text */}
        </div>
      </section>

      {/* Event List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl container-padding">
           {/* TODO: Add filtering/calendar view options here */}
           {/* <div className="mb-12 flex justify-center gap-4"> ... Filters ... </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Maintained gap */}
            {events.map((event) => (
              <Card key={event.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group border border-border/50"> {/* Added border */}
                 <div className="relative h-56 w-full"> {/* Consistent height */}
                   <Image
                     src={event.imageUrl}
                     alt={event.title}
                     layout="fill"
                     objectFit="cover"
                     className="group-hover:scale-105 transition-transform duration-300"
                     data-ai-hint="community event gathering people"
                   />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div> {/* Enhanced gradient */}
                 </div>
                <CardHeader className="pb-3 pt-5 px-5"> {/* Adjusted padding */}
                  <CardTitle className="h3-typography mb-3 leading-tight">{event.title}</CardTitle> {/* More prominent title, tighter leading */}
                   <div className="text-sm text-muted-foreground flex flex-col gap-2 mt-1"> {/* Increased gap */}
                     <span className="flex items-center gap-2.5"> {/* Increased gap */}
                       <Calendar className="h-4 w-4 flex-shrink-0 text-primary" /> {/* Colored icon */}
                       {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                     </span>
                     <span className="flex items-center gap-2.5"> {/* Increased gap */}
                       <Clock className="h-4 w-4 flex-shrink-0 text-primary" /> {/* Colored icon */}
                       {event.time}
                     </span>
                     <span className="flex items-center gap-2.5"> {/* Increased gap */}
                       <MapPin className="h-4 w-4 flex-shrink-0 text-primary" /> {/* Colored icon */}
                       {event.location}
                     </span>
                   </div>
                </CardHeader>
                <CardContent className="flex-grow pt-2 px-5 pb-5"> {/* Adjusted padding */}
                  <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription> {/* Slightly larger description */}
                </CardContent>
                <CardFooter className="bg-secondary p-4 mt-auto border-t"> {/* Added border */}
                  {/* Add registration link or more info button if needed */}
                  <Button variant="default" size="sm" asChild className="shadow hover:shadow-md transition-shadow"> {/* Changed to default variant */}
                     <Link href="#">Learn More <span aria-hidden="true" className="ml-1">&rarr;</span></Link> {/* Replace # with actual link */}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Message for no events or link to past events */}
           {events.length === 0 && (
             <div className="text-center py-20 text-muted-foreground border border-dashed border-border/70 rounded-lg bg-secondary mt-10"> {/* Enhanced styling */}
               <Calendar className="h-14 w-14 mx-auto mb-5 text-primary" /> {/* Increased size */}
               <p className="text-xl font-medium mb-2">No upcoming events scheduled.</p> {/* Clearer message */}
               <p>Please check back soon for updates or contact the church office for more information.</p>
               {/* Optional: <Link href="/past-events" className="text-primary hover:underline mt-5 inline-block font-medium">View Past Events</Link> */}
             </div>
           )}

           {/* TODO: Add Pagination if needed */}
        </div>
      </section>
    </div>
  );
}
