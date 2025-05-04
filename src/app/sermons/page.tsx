import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Download, Calendar, User } from 'lucide-react';
import Image from 'next/image';

// TODO: Replace with dynamic data fetching from Firestore or Storage
const sermons = [
  {
    id: 1,
    title: 'Living a Life of Purpose',
    preacher: 'Pastor John Doe',
    date: '2024-07-21',
    imageUrl: 'https://picsum.photos/400/250?random=30',
    audioUrl: '#', // Placeholder link
    videoUrl: '#', // Placeholder link
    description: 'Discover God\'s unique plan for your life and how to live it out daily.',
    series: 'Finding Your Calling',
  },
  {
    id: 2,
    title: 'The Power of Forgiveness',
    preacher: 'Minister Jane Smith',
    date: '2024-07-14',
    imageUrl: 'https://picsum.photos/400/250?random=31',
    audioUrl: '#',
    videoUrl: null, // Example without video
    description: 'Learn the importance of forgiveness and how it frees us.',
    series: null, // Example without series
  },
   {
    id: 3,
    title: 'Faith Over Fear',
    preacher: 'Pastor John Doe',
    date: '2024-07-07',
    imageUrl: 'https://picsum.photos/400/250?random=32',
    audioUrl: '#',
    videoUrl: '#',
    description: 'How to trust God even in uncertain times.',
    series: 'Foundations of Faith',
   },
];

export default function SermonsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto max-w-4xl text-center container-padding">
          <h1 className="h1-typography">Sermons</h1>
          <p className="mt-4 text-lg md:text-xl">Listen to past messages and grow in your faith.</p>
        </div>
      </section>

      {/* Sermon List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl container-padding">
           {/* TODO: Add filtering/search options here */}
           {/* <div className="mb-8"> ... Search Bar ... </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                 <div className="relative h-48 w-full">
                   <Image
                     src={sermon.imageUrl}
                     alt={sermon.title}
                     layout="fill"
                     objectFit="cover"
                     data-ai-hint="abstract spiritual light"
                   />
                 </div>
                <CardHeader>
                  {sermon.series && (
                     <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{sermon.series}</p>
                  )}
                  <CardTitle className="h3-typography">{sermon.title}</CardTitle>
                  <div className="text-sm text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 mt-1">
                     <span className="flex items-center gap-1.5">
                        <User className="h-4 w-4" /> {sermon.preacher}
                     </span>
                     <span className="flex items-center gap-1.5">
                         <Calendar className="h-4 w-4" /> {new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                     </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{sermon.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center gap-2 bg-secondary p-4">
                   <div className="flex gap-2">
                     {sermon.audioUrl && (
                       <Button variant="outline" size="sm" asChild>
                         <a href={sermon.audioUrl} target="_blank" rel="noopener noreferrer" aria-label="Listen to audio sermon">
                           <PlayCircle className="mr-1.5 h-4 w-4" /> Audio
                         </a>
                       </Button>
                     )}
                      {sermon.videoUrl && (
                       <Button variant="outline" size="sm" asChild>
                         <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch video sermon">
                           {/* Use a generic video icon or PlayCircle again */}
                           <PlayCircle className="mr-1.5 h-4 w-4" /> Video
                         </a>
                       </Button>
                     )}
                   </div>
                   {/* Optional Download Button */}
                   {/* {sermon.audioUrl && (
                     <Button variant="ghost" size="icon" asChild>
                        <a href={sermon.audioUrl} download={`${sermon.title}.mp3`} aria-label="Download audio sermon">
                          <Download className="h-5 w-5 text-muted-foreground hover:text-primary" />
                        </a>
                     </Button>
                   )} */}
                </CardFooter>
              </Card>
            ))}
          </div>

           {/* TODO: Add Pagination if needed */}
           {/* <div className="mt-12 text-center"> ... Pagination Controls ... </div> */}
        </div>
      </section>
    </div>
  );
}
