import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users } from 'lucide-react';

const leadershipTeam = [
  { name: 'Pastor John Doe', role: 'Senior Pastor', imageUrl: 'https://picsum.photos/300/300?random=1', bio: 'Leading the flock with wisdom and grace.' },
  { name: 'Minister Jane Smith', role: 'Associate Pastor', imageUrl: 'https://picsum.photos/300/300?random=2', bio: 'Passionate about community outreach.' },
  { name: 'Elder Michael Brown', role: 'Church Elder', imageUrl: 'https://picsum.photos/300/300?random=3', bio: 'Guiding the church through prayer and counsel.' },
];

const galleryImages = [
  { src: 'https://picsum.photos/600/400?random=10', alt: 'Church event 1', hint: 'church community event' },
  { src: 'https://picsum.photos/600/400?random=11', alt: 'Church event 2', hint: 'worship service' },
  { src: 'https://picsum.photos/600/400?random=12', alt: 'Church event 3', hint: 'community outreach volunteer' },
  { src: 'https://picsum.photos/600/400?random=13', alt: 'Church event 4', hint: 'church picnic social' },
  { src: 'https://picsum.photos/600/400?random=14', alt: 'Church event 5', hint: 'youth group activity' },
  { src: 'https://picsum.photos/600/400?random=15', alt: 'Church event 6', hint: 'baptism ceremony water' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col animate-fade-in">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden animate-fade-in-up">
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">About Us</h1>
          <p className="mt-4 text-lg md:text-xl">Learn more about our beliefs, leadership, and history.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background animate-fade-in-up animation-delay-200">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 container-padding">
          <div className="flex flex-col items-center text-center md:items-start md:text-left p-8 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-accent text-accent-foreground rounded-full p-4 mb-5 w-fit shadow">
              <Eye className="h-8 w-8" />
            </div>
            <h2 className="h2-typography mb-4">Our Vision</h2>
            <p className="text-muted-foreground text-lg">
              To be a beacon of hope and transformation in Effurun, guiding people into a life-changing relationship with Jesus Christ.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left p-8 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-accent text-accent-foreground rounded-full p-4 mb-5 w-fit shadow">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="h2-typography mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              To nurture believers through biblical teaching, empower them for service, reach our community with the Gospel, and worship God in spirit and truth.
            </p>
          </div>
        </div>
      </section>

       {/* Our History (Optional Simple Section) */}
      <section className="section-padding bg-secondary animate-fade-in-up animation-delay-400">
        <div className="container mx-auto max-w-4xl text-center container-padding">
          <h2 className="h2-typography mb-6">Our History</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Founded in [Year, e.g., 1995], Winners Baptist Church Effurun has grown from a small gathering of faithful believers into a vibrant community dedicated to serving God and neighbor. We cherish our past while looking forward to what God has in store for our future.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-background animate-fade-in-up animation-delay-600">
        <div className="container mx-auto max-w-6xl container-padding">
          <h2 className="h2-typography text-center mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {leadershipTeam.map((leader, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group hover:scale-105">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src={leader.imageUrl}
                    alt={leader.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint="person portrait leader"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="h3-typography mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-secondary animate-fade-in-up animation-delay-600">
        <div className="container mx-auto max-w-7xl container-padding">
          <h2 className="h2-typography text-center mb-12">Church Life in Pictures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md group hover:scale-105 transition-transform duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.hint}
                />
                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                 </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
           </div>
        </div>
      </section>
    </div>
  );
}
