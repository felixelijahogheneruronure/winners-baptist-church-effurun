import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Clock, Users, Heart, Handshake, Smile, BookOpen, LifeBuoy, Music, Globe } from 'lucide-react'; // Added more relevant icons

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden"> {/* Increased padding */}
         {/* Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto max-w-4xl text-center container-padding relative z-10">
          <h1 className="h1-typography">Our Services &amp; Ministries</h1>
          <p className="mt-4 text-lg md:text-xl">Find ways to worship, connect, grow, and serve within our church family.</p> {/* Updated text */}
        </div>
      </section>

      {/* Main Worship Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl container-padding">
          <h2 className="h2-typography text-center mb-12">Worship Gatherings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Maintained gap */}
             <Card className="shadow-lg hover:shadow-xl border border-border/50 transition-shadow duration-300 overflow-hidden flex flex-col"> {/* Added border, flex col */}
              <CardHeader className="bg-secondary p-6 border-b"> {/* Background, border */}
                 <div className="flex items-center gap-4 mb-2">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                    <CardTitle className="h3-typography">Sunday Worship Service</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow"> {/* flex-grow */}
                <CardDescription className="mb-4 text-base leading-relaxed"> {/* Use CardDescription, adjusted text size */}
                  Join us every Sunday for a vibrant time of blended worship (hymns and contemporary songs), prayer, and expository biblical teaching. Experience God's presence and connect with our diverse church family.
                </CardDescription>
                <p className="mb-1"><span className="font-semibold text-primary">Time:</span> 9:00 AM - 11:00 AM</p>
                <p><span className="font-semibold text-primary">Location:</span> Main Sanctuary</p>
              </CardContent>
            </Card>
             <Card className="shadow-lg hover:shadow-xl border border-border/50 transition-shadow duration-300 overflow-hidden flex flex-col"> {/* Added border, flex col */}
              <CardHeader className="bg-secondary p-6 border-b"> {/* Background, border */}
                 <div className="flex items-center gap-4 mb-2">
                    <BookOpen className="h-8 w-8 text-primary flex-shrink-0" /> {/* Changed Icon */}
                     <CardTitle className="h3-typography">Midweek Bible Study &amp; Prayer</CardTitle> {/* Updated Title */}
                 </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow"> {/* flex-grow */}
                 <CardDescription className="mb-4 text-base leading-relaxed"> {/* Use CardDescription, adjusted text size */}
                   Dive deeper into God's Word in an interactive group setting. Engage in discussion, ask questions, share prayer requests, and grow together in understanding and application of the scriptures.
                 </CardDescription>
                 <p className="mb-1"><span className="font-semibold text-primary">Time:</span> Wednesdays, 6:00 PM - 7:30 PM</p>
                 <p><span className="font-semibold text-primary">Location:</span> Fellowship Hall</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-6xl container-padding"> {/* Maintained max-width */}
          <h2 className="h2-typography text-center mb-12">Connect Through Ministries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Ministry Card Template */}
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border border-border/40"> {/* Added border */}
                 <CardHeader className="pt-8 pb-4"> {/* Adjusted padding */}
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-5 shadow-md transform group-hover:scale-110 transition-transform duration-300"> {/* Shadow, hover effect */}
                       <Smile className="h-8 w-8" /> {/* Icon */}
                    </div>
                    <CardTitle className="h3-typography">Children's Ministry</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow px-5 pb-6"> {/* Adjusted padding */}
                    <CardDescription className="text-base">Nurturing faith in our youngest members (ages 3-12) through fun, engaging activities and age-appropriate Bible lessons in a safe environment.</CardDescription>
                 </CardContent>
                 {/* Optional Footer for Contact/Link */}
                 {/* <CardFooter className="p-4 bg-muted/50 border-t"><Link href="#" className="text-sm text-primary font-medium">Learn More</Link></CardFooter> */}
            </Card>

            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border border-border/40 group"> {/* Added group class */}
                 <CardHeader className="pt-8 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-5 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                       <Users className="h-8 w-8" />
                    </div>
                    <CardTitle className="h3-typography">Youth Ministry (Teens)</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow px-5 pb-6">
                    <CardDescription className="text-base">Providing a dynamic space for teenagers (ages 13-18) to grow in their relationship with Christ, build friendships, and tackle relevant life issues.</CardDescription>
                 </CardContent>
            </Card>

             <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border border-border/40 group">
                 <CardHeader className="pt-8 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-5 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <Heart className="h-8 w-8" />
                    </div>
                    <CardTitle className="h3-typography">Women's Ministry</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow px-5 pb-6">
                    <CardDescription className="text-base">Connecting women of all ages for fellowship, Bible study, mentorship, prayer, and mutual support through various events and groups.</CardDescription>
                 </CardContent>
            </Card>

             <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border border-border/40 group">
                 <CardHeader className="pt-8 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-5 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <Handshake className="h-8 w-8" />
                    </div>
                    <CardTitle className="h3-typography">Men's Ministry</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow px-5 pb-6">
                    <CardDescription className="text-base">Building strong men of faith, integrity, and leadership through fellowship, accountability groups, service projects, and biblical teaching.</CardDescription>
                 </CardContent>
            </Card>

             <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border border-border/40 group">
                 <CardHeader className="pt-8 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-5 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <LifeBuoy className="h-8 w-8" /> {/* Icon for Small Groups/Support */}
                    </div>
                    <CardTitle className="h3-typography">Small Groups (Life Groups)</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow px-5 pb-6">
                    <CardDescription className="text-base">Connecting in smaller, home-based settings for deeper Bible study, personal sharing, prayer, accountability, and building authentic relationships.</CardDescription>
                 </CardContent>
            </Card>

             <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border border-border/40 group">
                 <CardHeader className="pt-8 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-5 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                         <Globe className="h-8 w-8" /> {/* Icon for Outreach/Missions */}
                    </div>
                    <CardTitle className="h3-typography">Community Outreach &amp; Missions</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow px-5 pb-6">
                    <CardDescription className="text-base">Serving our local community in practical ways (food drives, volunteer work) and supporting global missions to share the love and hope of Christ.</CardDescription>
                 </CardContent>
            </Card>
              {/* Add more ministry cards as needed, e.g., Music Ministry */}
               <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border border-border/40 group">
                 <CardHeader className="pt-8 pb-4">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-5 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <Music className="h-8 w-8" />
                    </div>
                    <CardTitle className="h3-typography">Music &amp; Worship Ministry</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow px-5 pb-6">
                    <CardDescription className="text-base">Leading the congregation in worship through vocal and instrumental music, enhancing our services and special events.</CardDescription>
                 </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
