import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // Import Dialog components

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
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto max-w-4xl text-center container-padding">
          <h1 className="h1-typography">Gallery</h1>
          <p className="mt-4 text-lg md:text-xl">Moments captured from our church life and events.</p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-7xl container-padding">
           {/* TODO: Add filtering by event/category */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
               <Dialog key={image.id}>
                <DialogTrigger asChild>
                    <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group cursor-pointer">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.hint}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Optimize image loading
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end p-2">
                           <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">{image.description}</p>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0">
                    <div className="relative aspect-video">
                         <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="contain"
                         />
                    </div>
                     <p className="text-center text-sm text-muted-foreground p-4">{image.description}</p>
                </DialogContent>
               </Dialog>
            ))}
          </div>

            {/* Message for no images */}
           {galleryImages.length === 0 && (
             <div className="text-center py-12 text-muted-foreground">
               <p>No images have been added to the gallery yet.</p>
             </div>
           )}

          {/* TODO: Add Pagination if needed */}
        </div>
      </section>
    </div>
  );
}
