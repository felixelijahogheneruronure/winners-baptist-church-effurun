import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Download, Calendar, User, Mic2, Video } from 'lucide-react'; // Use Mic2 and Video icons
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
    { // Added another sermon
    id: 4,
    title: 'Growing Through Trials',
    preacher: 'Elder Michael Brown',
    date: '2024-06-30',
    imageUrl: 'https://picsum.photos/400/250?random=33',
    audioUrl: '#',
    videoUrl: null,
    description: 'Understanding how challenges can strengthen our faith and character.',
    series: 'Foundations of Faith',
   },
];

export default function SermonsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
         {/* Optional: Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Sermons</h1>
          <p className="mt-4 text-lg md:text-xl">Listen to past messages and grow in your faith.</p>
        </div>
      </section>

      {/* Sermon List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl container-padding">
           {/* TODO: Add filtering/search options here */}
           {/* <div className="mb-10"> ... Search Bar ... </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                 <div className="relative h-52 w-full"> {/* Slightly increased height */}
                   <Image
                     src={sermon.imageUrl}
                     alt={sermon.title}
                     layout="fill"
                     objectFit="cover"
                     className="group-hover:scale-105 transition-transform duration-300"
                     data-ai-hint="abstract spiritual light"
                   />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                 </div>
                <CardHeader className="pb-4"> {/* Reduced padding bottom */}
                  {sermon.series && (
                     <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">{sermon.series}</p>
                  )}
                  <CardTitle className="h3-typography">{sermon.title}</CardTitle>
                  <div className="text-sm text-muted-foreground flex flex-col gap-1 mt-2"> {/* Use flex-col for stacking */}
                     <span className="flex items-center gap-2"> {/* Increased gap */}
                        <User className="h-4 w-4 flex-shrink-0" /> {sermon.preacher}
                     </span>
                     <span className="flex items-center gap-2"> {/* Increased gap */}
                         <Calendar className="h-4 w-4 flex-shrink-0" /> {new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                     </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0"> {/* Removed top padding */}
                  <CardDescription>{sermon.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-start items-center gap-3 bg-secondary p-4 mt-auto border-t"> {/* Use justify-start, added border */}
                   <div className="flex gap-3">
                     {sermon.audioUrl && (
                       <Button variant="outline" size="sm" asChild>
                         <a href={sermon.audioUrl} target="_blank" rel="noopener noreferrer" aria-label="Listen to audio sermon">
                           <Mic2 className="mr-1.5 h-4 w-4" /> Audio {/* Use Mic2 */}
                         </a>
                       </Button>
                     )}
                      {sermon.videoUrl && (
                       <Button variant="outline" size="sm" asChild>
                         <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch video sermon">
                           <Video className="mr-1.5 h-4 w-4" /> Video {/* Use Video */}
                         </a>
                       </Button>
                     )}
                   </div>
                   {/* Optional Download Button */}
                   {sermon.audioUrl && (
                     <Button variant="ghost" size="icon" className="ml-auto text-muted-foreground hover:text-primary" asChild>
                        <a href={sermon.audioUrl} download={`${sermon.title}.mp3`} aria-label="Download audio sermon">
                          <Download className="h-5 w-5" />
                        </a>
                     </Button>
                   )}
                </CardFooter>
              </Card>
            ))}
          </div>

           {/* Message for no sermons */}
           {sermons.length === 0 && (
             <div className="text-center py-16 text-muted-foreground">
                <Mic2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-lg">No sermons available at this time.</p>
                <p>Please check back later for new messages.</p>
             </div>
           )}

          {/* TODO: Add Pagination if needed */}
           {/* <div className="mt-12 text-center"> ... Pagination Controls ... </div> */}
        </div>
      </section>
    </div>
  );
}
