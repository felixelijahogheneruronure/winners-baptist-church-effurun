import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Download, Calendar, User, Mic2, Video, FileText } from 'lucide-react'; // Added FileText for notes/transcript
import Image from 'next/image';
import Link from 'next/link'; // Import Link

// TODO: Replace with dynamic data fetching from Firestore or Storage
const sermons = [
  {
    id: 1,
    title: 'Living a Life of Purpose: Understanding Your Calling', // More descriptive title
    preacher: 'Pastor John Doe',
    date: '2024-07-21',
    imageUrl: 'https://picsum.photos/400/250?random=30',
    audioUrl: '#', // Placeholder link
    videoUrl: '#', // Placeholder link
    notesUrl: '#', // Placeholder for notes/transcript
    description: 'Explore God\'s unique design for your life and learn practical steps to live out your calling with intention and impact daily.',
    series: 'Finding Your Calling',
  },
  {
    id: 2,
    title: 'The Transformative Power of Forgiveness', // Stronger title
    preacher: 'Minister Jane Smith',
    date: '2024-07-14',
    imageUrl: 'https://picsum.photos/400/250?random=31',
    audioUrl: '#',
    videoUrl: null, // Example without video
    notesUrl: null,
    description: 'Understand the biblical mandate for forgiveness and discover the freedom and healing it brings to both the giver and receiver.',
    series: null, // Example without series
  },
   {
    id: 3,
    title: 'Cultivating Unshakeable Faith Over Fear', // More active title
    preacher: 'Pastor John Doe',
    date: '2024-07-07',
    imageUrl: 'https://picsum.photos/400/250?random=32',
    audioUrl: '#',
    videoUrl: '#',
    notesUrl: '#',
    description: 'Learn how to actively trust God amidst life\'s uncertainties and replace paralyzing fear with steadfast, scripture-rooted faith.',
    series: 'Foundations of Faith',
   },
    { // Added another sermon
    id: 4,
    title: 'Finding Strength and Growth Through Trials', // Focused title
    preacher: 'Elder Michael Brown',
    date: '2024-06-30',
    imageUrl: 'https://picsum.photos/400/250?random=33',
    audioUrl: '#',
    videoUrl: null,
    notesUrl: null,
    description: 'Gain perspective on how challenges and adversity can refine our character, deepen our reliance on God, and ultimately strengthen our faith.',
    series: 'Foundations of Faith',
   },
];

export default function SermonsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden"> {/* Increased padding */}
         {/* Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Sermons</h1>
          <p className="mt-4 text-lg md:text-xl">Engage with past messages to deepen your understanding and grow in your faith journey.</p> {/* Updated text */}
        </div>
      </section>

      {/* Sermon List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl container-padding">
           {/* TODO: Add filtering/search options here */}
           {/* <div className="mb-12 flex flex-wrap gap-4 justify-center"> ... Search Bar & Filters ... </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Maintained gap */}
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group border border-border/50"> {/* Added border */}
                 <div className="relative h-56 w-full"> {/* Consistent height */}
                   <Image
                     src={sermon.imageUrl}
                     alt={sermon.title}
                     layout="fill"
                     objectFit="cover"
                     className="group-hover:scale-105 transition-transform duration-300"
                     data-ai-hint="abstract spiritual light faith" // Updated hint
                   />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div> {/* Enhanced gradient */}
                     {sermon.series && (
                         <span className="absolute top-3 left-3 bg-primary/80 text-primary-foreground text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded">
                             {sermon.series}
                         </span>
                      )}
                 </div>
                <CardHeader className="pb-3 pt-5 px-5"> {/* Adjusted padding */}
                  <CardTitle className="h3-typography mb-3 leading-tight">{sermon.title}</CardTitle> {/* More prominent title */}
                  <div className="text-sm text-muted-foreground flex flex-col gap-1.5 mt-1"> {/* Slightly increased gap */}
                     <span className="flex items-center gap-2.5"> {/* Increased gap */}
                        <User className="h-4 w-4 flex-shrink-0 text-primary" /> {sermon.preacher}
                     </span>
                     <span className="flex items-center gap-2.5"> {/* Increased gap */}
                         <Calendar className="h-4 w-4 flex-shrink-0 text-primary" /> {new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} {/* Full date */}
                     </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-2 px-5 pb-5"> {/* Adjusted padding */}
                  <CardDescription className="text-base leading-relaxed">{sermon.description}</CardDescription> {/* Slightly larger text */}
                </CardContent>
                <CardFooter className="flex flex-wrap justify-start items-center gap-3 bg-secondary p-4 mt-auto border-t"> {/* Use justify-start, added border, flex-wrap */}
                   <div className="flex gap-2 flex-wrap"> {/* Ensure buttons wrap */}
                     {sermon.audioUrl && (
                       <Button variant="outline" size="sm" asChild className="shadow-sm hover:shadow">
                         <Link href={sermon.audioUrl} target="_blank" rel="noopener noreferrer" aria-label="Listen to audio sermon">
                           <Mic2 className="mr-1.5 h-4 w-4" /> Audio
                         </Link>
                       </Button>
                     )}
                      {sermon.videoUrl && (
                       <Button variant="outline" size="sm" asChild className="shadow-sm hover:shadow">
                         <Link href={sermon.videoUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch video sermon">
                           <Video className="mr-1.5 h-4 w-4" /> Video
                         </Link>
                       </Button>
                     )}
                     {sermon.notesUrl && (
                        <Button variant="outline" size="sm" asChild className="shadow-sm hover:shadow">
                         <Link href={sermon.notesUrl} target="_blank" rel="noopener noreferrer" aria-label="View sermon notes or transcript">
                           <FileText className="mr-1.5 h-4 w-4" /> Notes
                         </Link>
                       </Button>
                     )}
                   </div>
                   {/* Download Button - positioned better if space allows */}
                   {sermon.audioUrl && (
                     <Button variant="ghost" size="icon" className="ml-auto text-muted-foreground hover:text-primary" asChild>
                        <Link href={sermon.audioUrl} download={`${sermon.title}.mp3`} aria-label="Download audio sermon">
                          <Download className="h-5 w-5" />
                        </Link>
                     </Button>
                   )}
                </CardFooter>
              </Card>
            ))}
          </div>

           {/* Message for no sermons */}
           {sermons.length === 0 && (
             <div className="text-center py-20 text-muted-foreground border border-dashed border-border/70 rounded-lg bg-secondary mt-10"> {/* Enhanced styling */}
                <Mic2 className="h-14 w-14 mx-auto mb-5 text-primary" /> {/* Increased size */}
                <p className="text-xl font-medium mb-2">No Sermons Available Yet</p> {/* Clearer message */}
                <p>Past messages will appear here. Please check back later!</p>
             </div>
           )}

          {/* TODO: Add Pagination if needed */}
           {/* <div className="mt-16 text-center"> ... Pagination Controls ... </div> */}
        </div>
      </section>
    </div>
  );
}
