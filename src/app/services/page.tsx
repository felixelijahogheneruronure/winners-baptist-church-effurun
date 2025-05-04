import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Heart, Handshake, Smile, BookOpen } from 'lucide-react'; // Added more diverse icons

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
         {/* Optional: Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmZiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Our Services &amp; Ministries</h1>
          <p className="mt-4 text-lg md:text-xl">Find ways to worship, grow, and serve with us.</p>
        </div>
      </section>

      {/* Main Worship Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl container-padding">
          <h2 className="h2-typography text-center mb-12">Worship Gatherings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Increased gap */}
             <Card className="shadow-lg hover:shadow-xl border border-border/50 transition-shadow duration-300 overflow-hidden"> {/* Added border */}
              <CardHeader className="bg-secondary p-6"> {/* Background for header */}
                 <div className="flex items-center gap-4 mb-2">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                    <CardTitle className="h3-typography">Sunday Worship Service</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 text-base"> {/* Adjusted text size */}
                  Join us every Sunday for a vibrant time of worship, prayer, and biblical teaching.
                  Experience God's presence and connect with our church family.
                </p>
                <p><span className="font-semibold">Time:</span> 9:00 AM - 11:00 AM</p>
                <p><span className="font-semibold">Location:</span> Main Sanctuary</p>
              </CardContent>
            </Card>
             <Card className="shadow-lg hover:shadow-xl border border-border/50 transition-shadow duration-300 overflow-hidden"> {/* Added border */}
              <CardHeader className="bg-secondary p-6"> {/* Background for header */}
                 <div className="flex items-center gap-4 mb-2">
                    <Users className="h-8 w-8 text-primary flex-shrink-0" />
                     <CardTitle className="h3-typography">Midweek Bible Study</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="p-6">
                 <p className="text-muted-foreground mb-4 text-base"> {/* Adjusted text size */}
                   Dive deeper into God's Word in a smaller group setting. Engage in discussion, ask questions,
                   and grow together in understanding and application of the scriptures.
                 </p>
                 <p><span className="font-semibold">Time:</span> Wednesdays, 6:00 PM - 7:30 PM</p>
                 <p><span className="font-semibold">Location:</span> Fellowship Hall</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-6xl container-padding"> {/* Increased max-width */}
          <h2 className="h2-typography text-center mb-12">Our Ministries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Example Ministry Card */}
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                 <CardHeader className="pt-6 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4 shadow-inner">
                       <Smile className="h-8 w-8" /> {/* Icon for Children */}
                    </div>
                    <CardTitle className="h3-typography">Children's Ministry</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Nurturing the faith of our youngest members through fun, engaging activities and age-appropriate Bible lessons.</p>
                    {/* Add contact or leader info if needed */}
                 </CardContent>
            </Card>
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                 <CardHeader className="pt-6 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4 shadow-inner">
                       <Users className="h-8 w-8" />
                    </div>
                    <CardTitle className="h3-typography">Youth Ministry</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Providing a dynamic space for teenagers to grow in their relationship with Christ and each other.</p>
                 </CardContent>
            </Card>
             <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                 <CardHeader className="pt-6 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4 shadow-inner">
                        <Heart className="h-8 w-8" /> {/* Icon for Women */}
                    </div>
                    <CardTitle className="h3-typography">Women's Ministry</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Connecting women for fellowship, spiritual growth, and mutual support.</p>
                 </CardContent>
            </Card>
             <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                 <CardHeader className="pt-6 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4 shadow-inner">
                        <Handshake className="h-8 w-8" /> {/* Icon for Men */}
                    </div>
                    <CardTitle className="h3-typography">Men's Ministry</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Building strong men of faith through fellowship, accountability, and service.</p>
                 </CardContent>
            </Card>
             <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                 <CardHeader className="pt-6 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4 shadow-inner">
                        <BookOpen className="h-8 w-8" /> {/* Icon for Education/Small Groups */}
                    </div>
                    <CardTitle className="h3-typography">Small Groups</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Connecting in smaller settings for deeper study, prayer, and building relationships.</p>
                 </CardContent>
            </Card>
             <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                 <CardHeader className="pt-6 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4 shadow-inner">
                        {/* Placeholder Icon for Outreach */}
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5V3.935m-16.945 7.065A10.003 10.003 0 0112 2c4.733 0 8.787 3.188 9.945 7.5M2.055 11A10.003 10.003 0 0012 22c4.733 0 8.787-3.188 9.945-7.5m-17.89 0h17.89" />
                        </svg>
                    </div>
                    <CardTitle className="h3-typography">Community Outreach</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Serving our local community in practical ways and sharing the love of Christ.</p>
                 </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
