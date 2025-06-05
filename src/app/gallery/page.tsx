import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Maximize, X, Image as ImageIcon } from 'lucide-react'; // Added ImageIcon

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/800/600?random=50', alt: 'Church picnic', hint: 'church picnic social gathering food', description: 'Annual Church Picnic Fun' },
  { id: 2, src: 'https://picsum.photos/800/600?random=51', alt: 'Worship service', hint: 'worship service congregation singing', description: 'Sunday Morning Worship Experience' },
  { id: 3, src: 'https://picsum.photos/800/600?random=52', alt: 'Youth group activity', hint: 'youth group teenagers fun games', description: 'Youth Group Game Night Excitement' },
  { id: 4, src: 'https://picsum.photos/800/600?random=53', alt: 'Community outreach', hint: 'community outreach volunteer helping', description: 'Serving Our Local Community with Love' },
  { id: 5, src: 'https://picsum.photos/800/600?random=54', alt: 'Baptism ceremony', hint: 'baptism ceremony water pastor', description: 'Baptism Sunday: New Life in Christ' },
  { id: 6, src: 'https://picsum.photos/800/600?random=55', alt: 'Christmas carol service', hint: 'christmas carol service choir singing', description: 'Joyful Christmas Carol Service 2023' },
  { id: 7, src: 'https://picsum.photos/800/600?random=56', alt: 'Women\'s ministry meeting', hint: 'womens ministry group discussion', description: 'Women\'s Fellowship & Study' },
  { id: 8, src: 'https://picsum.photos/800/600?random=57', alt: 'Church building exterior', hint: 'church building exterior day', description: 'Our Church Building - A Place of Welcome' },
  { id: 9, src: 'https://picsum.photos/800/600?random=58', alt: 'Children\'s ministry class', hint: 'childrens ministry kids learning crafts', description: 'Sunday School: Learning and Growing' },
  { id: 10, src: 'https://picsum.photos/800/600?random=59', alt: 'Prayer meeting', hint: 'prayer meeting group hands together', description: 'United in Midweek Prayer' },
  { id: 11, src: 'https://picsum.photos/800/600?random=60', alt: 'Men\'s fellowship breakfast', hint: 'mens fellowship group breakfast talking', description: 'Men\'s Breakfast & Fellowship' },
  { id: 12, src: 'https://picsum.photos/800/600?random=61', alt: 'Church choir practice', hint: 'church choir practice singing group', description: 'Choir Rehearsal: Preparing for Worship' },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col animate-fade-in">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden animate-fade-in-up">
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Gallery</h1>
          <p className="mt-4 text-lg md:text-xl">Moments captured from our church life, events, and fellowship.</p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding bg-background animate-fade-in-up animation-delay-200">
        <div className="container mx-auto max-w-7xl container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
               <Dialog key={image.id}>
                <DialogTrigger asChild>
                    <div className={`relative aspect-square overflow-hidden rounded-xl shadow-md group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl border border-border/50 animate-fade-in-up animation-delay-${(index % 4) * 100 + 200}`}> {/* Staggered animation */}
                        <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.hint}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                           <div className="flex justify-between items-end">
                             <p className="text-white text-sm font-medium truncate mr-2">{image.description}</p>
                             <Maximize className="h-6 w-6 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                           </div>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 bg-background border-none shadow-2xl rounded-lg overflow-hidden">
                    <div className="relative aspect-video w-full">
                         <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="contain"
                            className=""
                         />
                    </div>
                     <div className="p-4 text-center border-t bg-secondary">
                        <DialogDescription className="text-base text-foreground">{image.description}</DialogDescription>
                     </div>
                </DialogContent>
               </Dialog>
            ))}
          </div>

            {galleryImages.length === 0 && (
             <div className="text-center py-20 text-muted-foreground border border-dashed border-border/70 rounded-lg bg-secondary mt-10 animate-fade-in-up">
               <ImageIcon className="h-14 w-14 mx-auto mb-5 text-primary" /> {/* Changed to ImageIcon */}
               <p className="text-xl font-medium mb-2">The Gallery is Empty</p>
               <p>No images have been added yet. Check back soon to see moments from our church life!</p>
             </div>
           )}
        </div>
      </section>
    </div>
  );
}
