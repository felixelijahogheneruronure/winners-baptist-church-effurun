import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Users, BookOpen, CalendarDays, HandCoins } from 'lucide-react'; // Added icons
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center text-center bg-primary text-primary-foreground overflow-hidden">
        <Image
          src="https://picsum.photos/1600/900?random=1" // Changed random number for a different image
          alt="Church congregation"
          layout="fill"
          objectFit="cover"
          className="opacity-30 animate-fade-in"
          data-ai-hint="church congregation worship"
          priority // Load hero image quickly
        />
         {/* Subtle Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40"></div>
        <div className="relative z-10 p-4 md:p-8 max-w-3xl container-padding animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 drop-shadow-lg"> {/* Adjusted margin */}
            Welcome to Winners Baptist Church Effurun
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md animation-delay-200 animate-fade-in-up">
            Join us in worship, fellowship, and service. Discover your purpose in Christ.
          </p>
          <div className="space-x-4 animation-delay-400 animate-fade-in-up">
            <Button size="lg" variant="secondary" asChild>
                <Link href="/about">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/contact">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="section-padding bg-background animate-fade-in-up">
        <div className="container mx-auto max-w-4xl text-center container-padding">
          <h2 className="h2-typography mb-6">A Place to Belong</h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
            We are a community of believers committed to growing in faith, sharing God's love,
            and making a difference in Effurun and beyond. Whether you're new to the area or seeking
            a spiritual home, we welcome you with open arms.
          </p>
          <Button asChild variant="link" className="text-lg text-primary animate-fade-in-up animation-delay-400">
            <Link href="/about">Our Vision &amp; Mission <span aria-hidden="true">&rarr;</span></Link>
          </Button>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-padding bg-secondary animate-fade-in-up">
        <div className="container mx-auto max-w-5xl container-padding">
          <h2 className="h2-typography text-center mb-12">Join Us for Worship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
            <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4 shadow-inner">
                  <Clock className="h-8 w-8" />
                </div>
                <CardTitle className="h3-typography">Sunday Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Join us every Sunday for a time of uplifting worship, inspiring messages, and fellowship.</p>
                <p className="font-semibold mt-3">Time: 9:00 AM</p>
              </CardContent>
            </Card>
             <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 animation-delay-200 animate-fade-in-up">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4 shadow-inner">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="h3-typography">Midweek Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Deepen your faith and connect with others during our midweek Bible study and prayer meeting.</p>
                 <p className="font-semibold mt-3">Time: Wednesdays, 6:00 PM</p>
              </CardContent>
            </Card>
             <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 animation-delay-400 animate-fade-in-up">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4 shadow-inner">
                  <MapPin className="h-8 w-8" />
                </div>
                <CardTitle className="h3-typography">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Find us at the heart of Effurun. We look forward to welcoming you.</p>
                <p className="font-semibold mt-3">123 Church Street, Effurun</p>
                 <Button variant="link" size="sm" className="mt-2 px-0 text-primary" asChild>
                    <Link href="/contact">Get Directions</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
           <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
                <Button size="lg" asChild>
                    <Link href="/services">View All Services</Link>
                </Button>
           </div>
        </div>
      </section>

      {/* Call to Action / Next Steps */}
       <section className="section-padding bg-background animate-fade-in-up">
         <div className="container mx-auto max-w-5xl text-center container-padding">
           <h2 className="h2-typography mb-6">Get Involved</h2>
           <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
             There are many ways to connect and grow at Winners Baptist Church. Explore our ministries, join a small group, or volunteer your time.
           </p>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-400">
             <Link href="/sermons" className="group block p-6 bg-secondary rounded-lg shadow-sm hover:shadow-lg hover:bg-muted transition-all duration-300">
                <BookOpen className="h-7 w-7 mb-3 text-primary group-hover:scale-110 transition-transform" />
               <h3 className="h3-typography mb-2">Listen to Sermons</h3>
               <p className="text-sm text-muted-foreground">Catch up on past messages.</p>
             </Link>
             <Link href="/events" className="group block p-6 bg-secondary rounded-lg shadow-sm hover:shadow-lg hover:bg-muted transition-all duration-300 animation-delay-200 animate-fade-in-up">
                <CalendarDays className="h-7 w-7 mb-3 text-primary group-hover:scale-110 transition-transform" />
               <h3 className="h3-typography mb-2">Upcoming Events</h3>
               <p className="text-sm text-muted-foreground">See what's happening.</p>
             </Link>
             <Link href="/donate" className="group block p-6 bg-secondary rounded-lg shadow-sm hover:shadow-lg hover:bg-muted transition-all duration-300 animation-delay-400 animate-fade-in-up">
                <HandCoins className="h-7 w-7 mb-3 text-primary group-hover:scale-110 transition-transform" />
               <h3 className="h3-typography mb-2">Give Online</h3>
               <p className="text-sm text-muted-foreground">Support our ministry.</p>
             </Link>
           </div>
         </div>
       </section>
    </div>
  );
}
