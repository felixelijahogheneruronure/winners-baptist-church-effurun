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
];

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto max-w-4xl text-center container-padding">
          <h1 className="h1-typography">Upcoming Events</h1>
          <p className="mt-4 text-lg md:text-xl">Stay connected and join us for fellowship and growth.</p>
        </div>
      </section>

      {/* Event List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl container-padding">
           {/* TODO: Add filtering/calendar view options here */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                 <div className="relative h-48 w-full">
                   <Image
                     src={event.imageUrl}
                     alt={event.title}
                     layout="fill"
                     objectFit="cover"
                     data-ai-hint="community event gathering people"
                   />
                 </div>
                <CardHeader>
                  <CardTitle className="h3-typography">{event.title}</CardTitle>
                   <div className="text-sm text-muted-foreground flex flex-col gap-1 mt-2">
                     <span className="flex items-center gap-1.5">
                       <Calendar className="h-4 w-4" /> {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                     </span>
                     <span className="flex items-center gap-1.5">
                       <Clock className="h-4 w-4" /> {event.time}
                     </span>
                     <span className="flex items-center gap-1.5">
                       <MapPin className="h-4 w-4" /> {event.location}
                     </span>
                   </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{event.description}</CardDescription>
                </CardContent>
                <CardFooter className="bg-secondary p-4">
                  {/* Add registration link or more info button if needed */}
                  <Button variant="link" size="sm" className="px-0" asChild>
                     <Link href="#">Learn More</Link> {/* Replace # with actual link */}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Message for no events or link to past events */}
           {events.length === 0 && (
             <div className="text-center py-12 text-muted-foreground">
               <p>No upcoming events scheduled at this time. Check back soon!</p>
               {/* Optional: <Link href="/past-events" className="text-primary hover:underline">View Past Events</Link> */}
             </div>
           )}

           {/* TODO: Add Pagination if needed */}
        </div>
      </section>
    </div>
  );
}
