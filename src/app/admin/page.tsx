// TODO: Implement Authentication check here. Redirect if not admin.
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileEdit, Image, Mail, ShieldCheck, Users } from 'lucide-react'; // Example icons

export default function AdminPage() {

  // Placeholder content - Replace with actual admin dashboard components
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure full height */}
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24 relative overflow-hidden"> {/* Increased padding */}
         {/* Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMCAxMCBMIDIwIDEwIFogTSAxMCAwIEwgMTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto max-w-5xl text-center container-padding relative z-10"> {/* Increased max-width */}
          <h1 className="h1-typography">Admin Dashboard</h1>
          <p className="mt-4 text-lg md:text-xl">Manage website content and settings.</p>
        </div>
      </section>

      {/* Admin Options */}
      <section className="section-padding bg-background flex-grow"> {/* Ensure section grows */}
        <div className="container mx-auto max-w-5xl container-padding">
            <Card className="shadow-lg border border-border/50"> {/* Added shadow and border */}
                <CardHeader>
                    <CardTitle className="h2-typography mb-2">Content Management</CardTitle> {/* Adjusted heading style */}
                    <CardDescription>Update sermons, events, gallery images, and testimonies.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"> {/* Increased gap */}
                    {/* TODO: Replace # with actual admin routes */}
                    <Link href="#" className="group block p-6 bg-secondary rounded-lg hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md">
                        <FileEdit className="h-6 w-6 mb-3 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold text-lg mb-1">Manage Sermons</h3>
                        <p className="text-sm text-muted-foreground">Add, edit, or remove sermon recordings.</p>
                    </Link>
                    <Link href="#" className="group block p-6 bg-secondary rounded-lg hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md">
                        <CalendarDays className="h-6 w-6 mb-3 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold text-lg mb-1">Manage Events</h3>
                        <p className="text-sm text-muted-foreground">Create, update, or delete event details.</p>
                    </Link>
                    <Link href="#" className="group block p-6 bg-secondary rounded-lg hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md">
                        <Image className="h-6 w-6 mb-3 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold text-lg mb-1">Manage Gallery</h3>
                        <p className="text-sm text-muted-foreground">Upload or organize gallery photos.</p>
                    </Link>
                     <Link href="#" className="group block p-6 bg-secondary rounded-lg hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md">
                        <Users className="h-6 w-6 mb-3 text-primary group-hover:scale-110 transition-transform" />
                         <h3 className="font-semibold text-lg mb-1">Manage Testimonies</h3>
                         <p className="text-sm text-muted-foreground">Review and publish submitted testimonies.</p>
                     </Link>
                     <Link href="#" className="group block p-6 bg-secondary rounded-lg hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md">
                        <Mail className="h-6 w-6 mb-3 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold text-lg mb-1">Contact Submissions</h3>
                        <p className="text-sm text-muted-foreground">View messages sent via the contact form.</p>
                     </Link>
                     {/* Optional: Add more admin sections like User Management */}
                      <Link href="#" className="group block p-6 bg-secondary rounded-lg hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md">
                        <ShieldCheck className="h-6 w-6 mb-3 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold text-lg mb-1">Settings</h3>
                        <p className="text-sm text-muted-foreground">Configure site settings (requires auth setup).</p>
                     </Link>
                </CardContent>
            </Card>
             <p className="text-center text-muted-foreground mt-10 text-sm">
                <ShieldCheck className="inline-block h-4 w-4 mr-1 align-text-bottom"/>
                This page requires administrator privileges. Authentication setup needed.
             </p>
        </div>
      </section>
    </div>
  );
}

// Dummy CalendarDays component if not imported elsewhere
const CalendarDays = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
    <path d="M8 14h.01"/>
    <path d="M12 14h.01"/>
    <path d="M16 14h.01"/>
    <path d="M8 18h.01"/>
    <path d="M12 18h.01"/>
    <path d="M16 18h.01"/>
  </svg>
);
