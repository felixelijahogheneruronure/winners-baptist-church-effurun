import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // Import Dialog components
import { Maximize } from 'lucide-react'; // Icon for hover effect

// TODO: Replace with dynamic data fetching from Firestore or Storage
const galleryImages = [
  { id: 1, src: 'https://picsum.photos/800/600?random=50', alt: 'Church picnic', hint: 'church picnic social gathering food', description: 'Annual Church Picnic 2024' },
  { id: 2, src: 'https://picsum.photos/800/600?random=51', alt: 'Worship service', hint: 'worship service congregation singing', description: 'Sunday Morning Worship' },
  { id: 3, src: 'https://picsum.photos/800/600?random=52', alt: 'Youth group activity', hint: 'youth group teenagers fun games', description: 'Youth Group Game Night' },
  { id: 4, src: 'https://picsum.photos/800/600?random=53', alt: 'Community outreach', hint: 'community outreach volunteer helping', description: 'Serving the Local Community' },
  { id: 5, src: 'https://picsum.photos/800/600?random=54', alt: 'Baptism ceremony', hint: 'baptism ceremony water pastor', description: 'Baptism Sunday' },
  { id: 6, src: 'https://picsum.photos/800/600?random=55', alt: 'Christmas carol service', hint: 'christmas carol service choir singing', description: 'Christmas Carol Service 2023' },
  { id: 7, src: 'https://picsum.photos/800/600?random=56', alt: 'Women\'s ministry meeting', hint: 'womens ministry group discussion', description: 'Women\'s Fellowship Meeting' },
  { id: 8, src: 'https://picsum.photos/800/600?random=57', alt: 'Church building exterior', hint: 'church building exterior day', description: 'Our Church Building' },
  { id: 9, src: 'https://picsum.photos/800/600?random=58', alt: 'Children\'s ministry class', hint: 'childrens ministry kids learning crafts', description: 'Sunday School Fun' },
   { id: 10, src: 'https://picsum.photos/800/600?random=59', alt: 'Prayer meeting', hint: 'prayer meeting group hands together', description: 'Midweek Prayer Gathering' },
   { id: 11, src: 'https://picsum.photos/800/600?random=60', alt: 'Men\'s fellowship breakfast', hint: 'mens fellowship group breakfast talking', description: 'Men\'s Breakfast Fellowship' },
   { id: 12, src: 'https://picsum.photos/800/600?random=61', alt: 'Church choir practice', hint: 'church choir practice singing group', description: 'Choir Rehearsal' },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
         {/* Optional: Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Gallery</h1>
          <p className="mt-4 text-lg md:text-xl">Moments captured from our church life and events.</p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-7xl container-padding">
           {/* TODO: Add filtering by event/category */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Increased gap */}
            {galleryImages.map((image) => (
               <Dialog key={image.id}>
                <DialogTrigger asChild>
                    <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.hint}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Optimize image loading
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                            <Maximize className="h-8 w-8 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                        </div>
                         {/* Description Overlay */}
                         <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300">
                           <p className="text-white text-sm font-medium truncate">{image.description}</p>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-2 bg-background border-none shadow-2xl"> {/* Adjusted size and styling */}
                    <div className="relative aspect-video">
                         <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-md" // Add rounding if desired
                         />
                    </div>
                     <p className="text-center text-base text-muted-foreground py-3">{image.description}</p>
                </DialogContent>
               </Dialog>
            ))}
          </div>

            {/* Message for no images */}
           {galleryImages.length === 0 && (
             <div className="text-center py-16 text-muted-foreground">
               <Image className="h-12 w-12 mx-auto mb-4 text-primary" /> {/* Using Image icon */}
               <p className="text-lg">No images have been added to the gallery yet.</p>
             </div>
           )}

          {/* TODO: Add Pagination if needed */}
        </div>
      </section>
    </div>
  );
}
