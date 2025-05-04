import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Heart } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto max-w-4xl text-center container-padding">
          <h1 className="h1-typography">Our Services & Ministries</h1>
          <p className="mt-4 text-lg md:text-xl">Find ways to worship, grow, and serve with us.</p>
        </div>
      </section>

      {/* Main Worship Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl container-padding">
          <h2 className="h2-typography text-center mb-10">Worship Gatherings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                 <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                    <CardTitle className="h3-typography">Sunday Worship Service</CardTitle>
                 </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Join us every Sunday for a vibrant time of worship, prayer, and biblical teaching.
                  Experience God's presence and connect with our church family.
                </p>
                <p><span className="font-semibold">Time:</span> 9:00 AM - 11:00 AM</p>
                <p><span className="font-semibold">Location:</span> Main Sanctuary</p>
              </CardContent>
            </Card>
             <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                 <div className="flex items-center gap-4 mb-4">
                    <Users className="h-8 w-8 text-primary flex-shrink-0" />
                     <CardTitle className="h3-typography">Midweek Bible Study</CardTitle>
                 </div>
              </CardHeader>
              <CardContent>
                 <p className="text-muted-foreground mb-2">
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
        <div className="container mx-auto max-w-5xl container-padding">
          <h2 className="h2-typography text-center mb-10">Ministries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Example Ministry Card */}
            <Card className="text-center">
                 <CardHeader>
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                       <Heart className="h-8 w-8" />
                    </div>
                    <CardTitle className="h3-typography">Children's Ministry</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground">Nurturing the faith of our youngest members through fun, engaging activities and age-appropriate Bible lessons.</p>
                    {/* Add contact or leader info if needed */}
                 </CardContent>
            </Card>
            <Card className="text-center">
                 <CardHeader>
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                       <Users className="h-8 w-8" />
                    </div>
                    <CardTitle className="h3-typography">Youth Ministry</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground">Providing a dynamic space for teenagers to grow in their relationship with Christ and each other.</p>
                 </CardContent>
            </Card>
             <Card className="text-center">
                 <CardHeader>
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                        {/* Placeholder Icon for Women's Ministry */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-4.372a6.981 6.981 0 00-2.17-5.197M6 21v-4.372a6.981 6.981 0 012.17-5.197" />
                        </svg>
                    </div>
                    <CardTitle className="h3-typography">Women's Ministry</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground">Connecting women for fellowship, spiritual growth, and mutual support.</p>
                 </CardContent>
            </Card>
            {/* Add more ministry cards as needed */}
          </div>
        </div>
      </section>
    </div>
  );
}
